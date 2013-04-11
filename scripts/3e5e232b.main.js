(function($){
  $('body').find('video')[0].volume = 0;
  bespoke.horizontal.from('article');
  bespoke.on('activate', function(event) {
    var $slide = $(event.slide);
    if($slide.find('video').length) {
      $slide.find('video')[0].play();
    } else {
      $('body').find('video')[0].pause();
    };
    return false;
  });
})(jQuery);