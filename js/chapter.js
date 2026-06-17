'use strict';

$(function () {
  // ── Parse URL param ──────────────────────────────────────────────
  var params    = new URLSearchParams(window.location.search);
  var chapterId = parseInt(params.get('id'), 10);
  var chapter   = BOOK_DATA.chapters.find(function (c) { return c.id === chapterId; });

  if (!chapter) {
    window.location.href = 'index.html';
    return;
  }

  // ── Populate hero ────────────────────────────────────────────────
  var numPadded    = String(chapter.id).padStart(2, '0');
  var lessonCount  = chapter.sections.length;
  var lessonLabel  = lessonCount === 1 ? 'lesson' : 'lessons';

  document.title = 'Ch. ' + numPadded + ' — ' + chapter.title + ' | Rust for All';
  $('#meta-desc').attr('content', chapter.tagline + ' — Rust for All');
  $('#page-title').text('Ch. ' + numPadded + ' — ' + chapter.title + ' | Rust for All');
  $('#chapter-eyebrow').html(
    '<i class="bi bi-' + chapter.icon + '" aria-hidden="true"></i>' +
    '&nbsp; Chapter ' + numPadded
  );
  $('#chapter-title').text(chapter.title);
  $('#chapter-desc').text(chapter.description);
  $('#chapter-lesson-count').text(lessonCount + ' ' + lessonLabel);

  // ── Build accordion ──────────────────────────────────────────────
  var accordion = $('#sections-accordion');

  chapter.sections.forEach(function (section, index) {
    var itemId      = 'section-item-' + index;
    var isFirst     = index === 0;
    var numLabel    = String(index + 1).padStart(2, '0');
    var materialUrl = 'material.html?file=' + section.file + '&chapterId=' + chapter.id;

    var item = $('<div class="accordion-item" role="listitem"></div>');

    // Header / button
    var header = $('<h3 class="accordion-header"></h3>');
    var btn    = $('<button type="button" class="accordion-button"></button>')
      .toggleClass('collapsed', !isFirst)
      .attr({
        'data-bs-toggle': 'collapse',
        'data-bs-target': '#' + itemId,
        'aria-expanded':  isFirst ? 'true' : 'false',
        'aria-controls':  itemId
      })
      .append(
        $('<span class="section-num"></span>').text(numLabel),
        $('<span class="section-title"></span>').text(section.title)
      );

    header.append(btn);

    // Collapsible body
    var collapseDiv = $('<div class="accordion-collapse collapse"></div>')
      .attr({ id: itemId })
      .toggleClass('show', isFirst);

    var body = $('<div class="accordion-body"></div>').append(
      $('<p class="section-desc"></p>').text(section.description),
      $('<a class="btn-brand btn-sm"></a>')
        .attr('href', materialUrl)
        .append(
          $('<span></span>').text('Read Material'),
          $('<i class="bi bi-arrow-right-short ms-1" aria-hidden="true"></i>')
        )
    );

    collapseDiv.append(body);
    item.append(header, collapseDiv);
    accordion.append(item);
  });

  // ── Keyboard: open accordion on Enter when button focused ────────
  // (Bootstrap already handles this, but ensure the read button is reachable)
  accordion.on('keydown', '.accordion-button', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      // Bootstrap handles toggle; nothing extra needed
    }
  });
});
