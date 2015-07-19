				<div class="clear"></div>
				
				<div id="footer">

						<div class="column">
							<?php dynamic_sidebar('Footer: Column 1') ?>
						</div><!-- /1st column -->

						<div class="column">
							<?php dynamic_sidebar('Footer: Column 2') ?>
						</div><!-- /2nd column -->
						
						<div class="column">
							<?php dynamic_sidebar('Footer: Column 3') ?>
						</div><!-- /3rd column -->
						
						<div class="column last">
							<?php dynamic_sidebar('Footer: Column 4') ?>
						</div><!-- /4th column -->
						 
				 
					<div class="clear"></div>    
				</div> <!-- /#footer -->

				<div class="clear"></div>


			</div> <!-- /.content-wrap -->

		</div> <!-- /.container -->

		<div id="copyright">
			<div class="inner-wrap">
		
				<?php _e('Copyright', 'wpzoom');?> &copy; <?php echo date("Y"); ?> &mdash; <a href="<?php echo home_url(); ?>/" class="on"><?php bloginfo('name'); ?></a>. <?php _e('All Rights Reserved.', 'wpzoom');?> 
				<span><?php _e('Designed by', 'wpzoom');?> <a href="http://www.wpzoom.com" target="_blank" title="WPZOOM WordPress Themes">WPZOOM</a></span>

			</div>
		</div>
				

		<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>

		<?php if ( ( option::get('featured_enable') == 'on' ) && $paged < 2 && is_home() ) {  ?>

			<script type="text/javascript">
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
					<?php if ( option::get('featured_rotate') == 'on' ) { echo 'slideshowSpeed: ' . option::get('featured_interval') . ','; } ?>
					slideshow: <?php echo option::get('featured_rotate') == 'on' ? 'true' : 'false'; ?>,
					before: $.fn.fp_stopDontMove
				});

			});
			</script> 

			<?php
			wp_enqueue_script( 'frogaloop', get_template_directory_uri() . '/js/frogaloop.js', array(), wpzoom::$themeVersion, true );
	        wp_enqueue_script( 'youtube-api', 'http://www.youtube.com/player_api', array(), wpzoom::$themeVersion, true );
	        ?>

		<?php } ?>

		<?php wp_footer(); ?> 

	</body>
</html>