'use strict';

$(function () {
  const grid = $('#chapters-grid');

  BOOK_DATA.chapters.forEach(function (chapter) {
    const lessonCount = chapter.sections.length;
    const lessonLabel = lessonCount === 1 ? 'lesson' : 'lessons';
    const numPadded   = String(chapter.id).padStart(2, '0');
    const url         = 'chapter.html?id=' + chapter.id;

    const card = $('<div class="col-sm-6 col-xl-4" role="listitem"></div>');

    card.append(
      $('<a></a>')
        .addClass('chapter-card')
        .attr('href', url)
        .attr('aria-label', 'Chapter ' + chapter.id + ': ' + chapter.title)
        .append(
          $('<div class="card-header-row"></div>').append(
            $('<span class="card-num"></span>').text('Ch. ' + numPadded),
            $('<span class="card-icon"></span>').append(
              $('<i aria-hidden="true"></i>').addClass('bi bi-' + chapter.icon)
            )
          ),
          $('<h3 class="card-title"></h3>').text(chapter.title),
          $('<p class="card-tagline"></p>').text(chapter.tagline),
          $('<div class="card-footer-row"></div>').append(
            $('<span></span>').text(lessonCount + ' ' + lessonLabel),
            $('<span class="card-arrow"></span>').append(
              $('<i class="bi bi-arrow-right" aria-hidden="true"></i>')
            )
          )
        )
    );

    grid.append(card);
  });
});
