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
                                <a href="/impressum/">Impressum</a> | 
                                <a href="/datenschutz/">Datenschutz</a> | 
				<a href="/ueber-uns/">Über Uns</a> | 
                                <a href="/mitmachen/">Mitmachen</a> |
                                <a href="/waehrungsrechner/">Währungsrechner</a> | 		
                                <a href="/foto-galerien/">Foto-Galerien</a> | 		                  
                                <a href="/werben/">Werben</a> | 
                                <a href="/partner/">Partner</a> | 
                                <a href="/newsletter/">Newsletter</a> | 
                                <a href="/news/">News</a><br />
				<?php _e('Copyright', 'wpzoom');?> &copy; <?php echo "2013 - " . date("Y"); ?> &mdash; <?php bloginfo('name'); ?>. <?php _e('All Rights Reserved.', 'wpzoom');?> 

			</div>
		</div>
				

		<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>

		<?php if ( ( option::get('featured_enable') == 'on' ) && $paged < 2 && is_home() ) {  
    
      wp_enqueue_script( 'theme-slider', get_template_directory_uri() . '/js/slider.js', array(), wpzoom::$themeVersion, true );
      wp_enqueue_script( 'frogaloop', get_template_directory_uri() . '/js/frogaloop.js', array(), wpzoom::$themeVersion, true );
      wp_enqueue_script( 'youtube-api', 'http://www.youtube.com/player_api', array(), wpzoom::$themeVersion, true );
      
    }
    ?>
		<?php wp_footer(); ?> 

	</body>
</html>