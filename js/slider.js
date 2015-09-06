jQuery(document).ready(function($) {
  $.fn.fp_stopDontMove = function() {
          $(fp_vimeoPlayers).each(function(i, el) {
                  if ($(el).attr('src') != '') {
                          $f(el).api('pause');
                  }
          });

          $(fp_youtubePlayers).each(function() {
                  if ($.isFunction(this.stopVideo)) {
                          this.stopVideo();
                  }
          });
  }
  
  jQuery('#slider #slidemain').flexslider({
          controlNav: true,
          directionNav: true,
          animationLoop: false,
          animation: 'slide',
          useCSS: false,
          video: true,
          smoothHeight: true,
          slideshow: false,
          before: $.fn.fp_stopDontMove
  });

});