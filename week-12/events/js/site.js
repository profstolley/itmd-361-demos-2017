// Release the dollar-sign from jQuery's control
$.noConflict();

// Re-introduce dollar sign scoped to self-executing
// function
(function($) {
  var doorbell = new Audio('media/doorbell.mp3');

  $('#masthead').html('OMG jQuery');
  $('html').removeClass('no-js').addClass('js');

  $('a[href^="http"]').on('click', function(e) {
    // open a new window (this is BAD PRACTICE, but a good first
    // example for events):
    window.open($(this).attr('href'));
    e.preventDefault();
  });

  $('abbr[title]').one('click', function() {
    // <abbr title="Blah">B</abbr> -> <abbr>Blah (B)</abbr>
    $(this).text(
      $(this).attr('title') + " (" + $(this).text() + ")"
    );
    $(this).addClass('expanded');
  });

  $($('li')[2]).on('click', function() {
    // Visually hide the element:
    // $(this).addClass('hide');
    // Remove it from the DOM tree:
    $(this).remove();
  });

  $('#doorbell').on('click', function() {
    doorbell.play();
  });

  $('video').on('click', function() {
    this.paused ? this.play() : this.pause();
  });

})(jQuery);
