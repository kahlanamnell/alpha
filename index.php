<?php get_header(); ?>
<?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; // gets current page number ?>

<?php if (is_home() && $paged < 2) { 

	get_template_part('wpzoom-featured'); // Display 4 Featured Posts at the Top
	
	if ( option::get('ad_top_select') == 'on' ) { // Homepage Top Ad ?>

		<div class="adv_top">
		<?php
			if ( option::get('ad_top_code') <> "" ) {
				echo stripslashes(option::get('ad_top_code'));
			} else {
				?><a href="<?php echo option::get('banner_top_home_url'); ?>"><img src="<?php echo option::get('banner_top_home'); ?>" alt="<?php echo option::get('banner_top_home_alt'); ?>" /></a><?php
			}

		?></div><?php
		}
	
} ?>

<section id="main" role="main">

	<?php if (is_home() && $paged < 2) { // Display Featured Area on Homepage only ?>
 
		<div class="featured-area">

	 		<?php get_sidebar( 'left' ); // Left Sidebar of Featured Area ?>

			<div class="featured-separator"></div>

			<?php if (option::get('featured_enable') == 'on' ) { get_template_part('wpzoom-slider'); } // Featured Slideshow ?>
			<div class="clear"></div>
		 
		</div>

		<div class="clear"></div>

		<?php
			if ( option::get('ad_slider_select') == 'on' ) { // Homepage Ad below the Slider ?>

				<div class="adv_slider">
				<?php
					if ( option::get('ad_slider_code') <> "" ) {
						echo stripslashes(option::get('ad_slider_code'));
					} else {
						?><a href="<?php echo option::get('banner_slider_home_url'); ?>"><img src="<?php echo option::get('banner_slider_home'); ?>" alt="<?php echo option::get('banner_slider_home_alt'); ?>" /></a><?php
					}

				?></div><?php
				}
			?>

		<div class="clear"></div>

	<?php } ?>

 	<div class="main-area">
		<?php if (is_home() && $paged < 2) { ?>
	   
			<?php dynamic_sidebar('Homepage'); ?>
			
			<div class="clear"></div>

		<?php } ?>


		<?php if ( $paged > 1 || option::get('recent_posts') == 'on') { ?>
	 
		 	<div class="archiveposts">
		  
		  		<h3 class="title"><span><?php echo option::get('recent_title'); ?></span></h3>
		   			 
				<?php
					global $query_string; // required

					/* Exclude categories from Recent Posts */
					if (option::get('recent_part_exclude') != 'off') {
						if (count(option::get('recent_part_exclude'))){
							$exclude_cats = implode(",-", (array) option::get('recent_part_exclude'));
							$exclude_cats = '-' . $exclude_cats;
							$args['cat'] = $exclude_cats;
						}
					}

					/* Exclude featured posts from Recent Posts */
					if (option::get('hide_featured') == 'on') {
						
						$featured_posts = new WP_Query( 
							array( 
								'post__not_in' => get_option( 'sticky_posts' ),
								'posts_per_page' => option::get('featured_number'),
								'meta_key' => 'wpzoom_is_featured',
								'meta_value' => 1				
								) );
							
						while ($featured_posts->have_posts()) {
							$featured_posts->the_post();
							global $post;
							$postIDs[] = $post->ID;
						}
						$args['post__not_in'] = $postIDs;
					}

					$args['paged'] = $paged;
					if (count($args) >= 1) {
						query_posts($args);
					}
					?>

				<?php get_template_part('loop'); ?>
				 
		 	</div> <!-- /#posts -->
		
		<?php } ?>
	</div><!-- /.main-area -->
  
</section><!-- /#main -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>