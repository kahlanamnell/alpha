	<div class="inner-wrap">
		<div id="news-ticker">

			<?php
				$loop = new WP_Query( array( 
					'post_type' => array( 'post', 'coupon' ),
					'post__not_in' => get_option( 'sticky_posts' ),
					'posts_per_page' => option::get( 'breaking_number' ),
					'meta_key' => 'wpzoom_is_breaking',
					'meta_value' => 1				
				) );
				?>

			<div class="first">
				<dl id="ticker">
 
				<?php if ( $loop->have_posts() ) :  while ( $loop->have_posts() ) : $loop->the_post(); ?> 
 					  
			 		<dt><?php echo __('ago ', 'wpzoom') . human_time_diff( get_the_time('U'), current_time('timestamp') ); ?> </dt>
					<dd><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></dd>
 
				<?php endwhile; ?> 
 		 
				<?php else : ?>

		 			<p><?php _e('There are no breaking news at the moment', 'wpzoom'); ?></p>

 				<?php endif; ?>
  
				</dl>
			</div>
		 	<?php wp_reset_query(); ?>
		</div>	
	</div>