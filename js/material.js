'use strict';

$(function () {
  // ── Parse URL params ─────────────────────────────────────────────
  var params     = new URLSearchParams(window.location.search);
  var fileParam  = params.get('file');
  var chapterId  = parseInt(params.get('chapterId'), 10);

  if (!fileParam) {
    window.location.href = 'index.html';
    return;
  }

  // ── Resolve chapter ──────────────────────────────────────────────
  var chapter = BOOK_DATA.chapters.find(function (c) { return c.id === chapterId; })
    || FILE_TO_CHAPTER[fileParam];

  if (!chapter) {
    window.location.href = 'index.html';
    return;
  }

  // ── Wire back / chapter buttons ──────────────────────────────────
  var chapterUrl = 'chapter.html?id=' + chapter.id;
  $('#back-btn').attr('href', chapterUrl);
  $('#back-btn-text').text('Back to ' + chapter.title);
  $('#chapter-btn').attr('href', chapterUrl);
  $('#chapter-btn-label').text('Ch. ' + String(chapter.id).padStart(2, '0') + ' — ' + chapter.title);

  // ── Breadcrumb ───────────────────────────────────────────────────
  $('#breadcrumb-chapter-link')
    .attr('href', chapterUrl)
    .text(chapter.title);

  // ── Prev / Next navigation ───────────────────────────────────────
  var currentIndex = ALL_MATERIALS.findIndex(function (m) { return m.file === fileParam; });
  var prev = currentIndex > 0 ? ALL_MATERIALS[currentIndex - 1] : null;
  var next = currentIndex < ALL_MATERIALS.length - 1 ? ALL_MATERIALS[currentIndex + 1] : null;

  if (prev) {
    $('#prev-btn')
      .attr('href', 'material.html?file=' + prev.file + '&chapterId=' + prev.chapterId)
      .show();
    $('#prev-title').text(prev.title);
  } else {
    $('#prev-btn').hide();
  }

  if (next) {
    $('#next-btn')
      .attr('href', 'material.html?file=' + next.file + '&chapterId=' + next.chapterId)
      .show();
    $('#next-title').text(next.title);
  } else {
    $('#next-btn').hide();
  }

  // ── Configure marked.js renderer ─────────────────────────────────
  var renderer = new marked.Renderer();

  // Rewrite .md links → our web app URLs; prefix image src with book/ base
  renderer.link = function (href, title, text) {
    if (href && !href.startsWith('http') && !href.startsWith('#') && href.endsWith('.md')) {
      var slug = href.replace(/\.md$/, '').split('/').pop();
      var linkedChapter = FILE_TO_CHAPTER[slug];
      if (linkedChapter) {
        href = 'material.html?file=' + slug + '&chapterId=' + linkedChapter.id;
      }
    }
    var titleAttr = title ? ' title="' + escAttr(title) + '"' : '';
    var externalAttr = href && href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
    return '<a href="' + escAttr(href || '') + '"' + titleAttr + externalAttr + '>' + text + '</a>';
  };

  renderer.image = function (href, title, text) {
    if (href && !href.startsWith('http')) {
      href = './book/' + href;
    }
    var titleAttr = title ? ' title="' + escAttr(title) + '"' : '';
    return '<img src="' + escAttr(href || '') + '" alt="' + escAttr(text || '') + '"' + titleAttr + ' class="img-fluid">';
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    breaks: false
  });

  // ── Fetch and render markdown ─────────────────────────────────────
  fetch('./book/' + fileParam + '.md')
    .then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.text();
    })
    .then(function (markdown) {
      return resolveIncludes(markdown);
    })
    .then(function (markdown) {
      var html = marked.parse(markdown);

      // Normalize language classes: console/sh → bash
      html = html.replace(/class="language-console"/g, 'class="language-bash"');
      html = html.replace(/class="language-sh"/g,      'class="language-bash"');

      var $area = $('#content-area');
      $area.html(html);

      // Assign IDs to headings for anchor linking
      assignHeadingIds($area);

      // Update breadcrumb and page title from first heading
      var firstH = $area.find('h1, h2').first().text().trim();
      if (firstH) {
        document.title = firstH + ' | Rust for All';
        $('#breadcrumb-current').text(firstH);
      }

      // Build TOC
      buildTOC($area);

      // Syntax highlighting
      if (window.Prism) {
        Prism.highlightAllUnder($area[0]);
      }

      // Swap loading → content
      $('#content-loading').hide();
      $area.show();

      // Init TOC scroll spy after content is visible
      initScrollSpy($area);
    })
    .catch(function (err) {
      $('#content-loading').hide();
      $('#content-area')
        .html(
          '<div style="padding:2rem;border-left:3px solid var(--brand);background:var(--brand-light);font-family:var(--font-mono);font-size:.875rem;">' +
          '<strong>Could not load content</strong><br><code>' + escHtml(err.message) + '</code><br><br>' +
          '<small style="color:var(--text-muted);">Make sure the site is served via a local web server (e.g. <code>python -m http.server 8080</code>) and the book/ directory is in place.</small>' +
          '</div>'
        )
        .show();
    });

  // ── Helpers ──────────────────────────────────────────────────────

  // Resolve {{#include path[:range]}} and {{#rustdoc_include path[:range]}} directives.
  // Files live at ./listings/... (markdown is in ./book/, directives use ../listings/).
  function resolveIncludes(markdown) {
    var pattern = /\{\{#(rustdoc_include|include)\s+([^}\s]+)\}\}/g;
    var matches = [];
    var m;

    while ((m = pattern.exec(markdown)) !== null) {
      var spec      = m[2];
      var colonIdx  = spec.indexOf(':');
      var filePath  = colonIdx === -1 ? spec : spec.substring(0, colonIdx);
      var range     = colonIdx === -1 ? null : spec.substring(colonIdx + 1);

      matches.push({
        full:     m[0],
        isRustdoc: m[1] === 'rustdoc_include',
        filePath: filePath,
        range:    range
      });
    }

    if (matches.length === 0) return Promise.resolve(markdown);

    var fetches = matches.map(function (entry) {
      // ../listings/... → ./listings/... (one level up from book/)
      var url = entry.filePath.replace(/^\.\.\//, './');
      return fetch(url)
        .then(function (r) { return r.ok ? r.text() : null; })
        .catch(function ()  { return null; });
    });

    return Promise.all(fetches).then(function (contents) {
      var result = markdown;
      matches.forEach(function (entry, i) {
        var text = contents[i];
        var replacement = text === null
          ? '// (code listing not available)'
          : extractContent(text, entry.range, entry.isRustdoc);
        // Use split/join to avoid regex special-char issues in entry.full
        result = result.split(entry.full).join(replacement);
      });
      return result;
    });
  }

  function extractContent(content, range, isRustdoc) {
    var lines = content.split('\n');

    if (range !== null && range !== undefined && range !== '') {
      if (/^\d/.test(range)) {
        // Numeric range: "N", "N:", "N:M"
        var parts     = range.split(':');
        var startLine = Math.max(1, parseInt(parts[0], 10));
        var endLine   = (parts.length > 1 && parts[1]) ? parseInt(parts[1], 10) : lines.length;
        lines = lines.slice(startLine - 1, endLine);
      } else {
        // Named anchor: extract between ANCHOR: name … ANCHOR_END: name
        var anchor   = range;
        var startIdx = -1;
        var endIdx   = lines.length;

        for (var i = 0; i < lines.length; i++) {
          if (startIdx === -1 && lines[i].indexOf('ANCHOR: ' + anchor) !== -1) {
            startIdx = i + 1;
          } else if (startIdx !== -1 && lines[i].indexOf('ANCHOR_END: ' + anchor) !== -1) {
            endIdx = i;
            break;
          }
        }

        lines = startIdx !== -1 ? lines.slice(startIdx, endIdx) : lines;
      }
    }

    // Strip rustdoc hidden lines ("# " prefix or bare "#") and all ANCHOR markers
    lines = lines.filter(function (l) {
      if (l.indexOf('// ANCHOR') !== -1 || l.indexOf('# ANCHOR') !== -1) return false;
      if (isRustdoc) {
        var t = l.trim();
        if (t === '#' || t.startsWith('# ')) return false;
      }
      return true;
    });

    return lines.join('\n').trimEnd();
  }

  function assignHeadingIds($area) {
    var seen = {};
    $area.find('h1, h2, h3, h4').each(function () {
      if (this.id) return;
      var base = $(this).text().trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s\-_]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
      var id = base;
      var n  = 1;
      while (seen[id]) { id = base + '-' + (++n); }
      seen[id] = true;
      this.id  = id;
    });
  }

  function buildTOC($area) {
    var headings = $area.find('h2, h3');
    var $tocList = $('#toc-list');
    $tocList.empty();

    if (headings.length === 0) {
      $('#toc-col').hide();
      return;
    }

    headings.each(function () {
      var tag  = this.tagName.toLowerCase(); // h2 or h3
      var text = $(this).text().trim();
      var id   = this.id;

      var $item = $('<li class="toc-item toc-' + tag + '" role="listitem"></li>');
      var $link = $('<a class="toc-link"></a>')
        .attr('href', '#' + id)
        .text(text);

      $link.on('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(id);
        if (target) {
          var offset = target.getBoundingClientRect().top + window.scrollY
            - (62 + 24); // navbar height + padding
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      });

      $item.append($link);
      $tocList.append($item);
    });

    // Mobile: toggle TOC list on heading click
    $('#toc-heading').on('click keydown', function (e) {
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      var $col = $('#toc-col');
      var expanded = $col.hasClass('expanded');
      $col.toggleClass('expanded', !expanded);
      $('#toc-heading').attr('aria-expanded', !expanded);
    });
  }

  function initScrollSpy($area) {
    var headings = $area.find('h2, h3').toArray();
    if (headings.length === 0) return;

    var ticking = false;

    $(window).on('scroll.toc', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var scrollTop = window.scrollY + 80; // offset for navbar
        var active    = null;

        headings.forEach(function (h) {
          if (h.getBoundingClientRect().top + window.scrollY <= scrollTop) {
            active = h;
          }
        });

        $('.toc-link').removeClass('active');
        if (active) {
          $('.toc-link[href="#' + active.id + '"]').addClass('active');
        }
      });
    });
  }

  function escAttr(str) {
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function escHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
});
