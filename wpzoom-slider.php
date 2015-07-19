<?php
$loop = new WP_Query( array( 
	'post__not_in' => get_option( 'sticky_posts' ),
	'posts_per_page' => option::get( 'featured_number' ),
	'meta_key' => 'wpzoom_is_featured',
	'meta_value' => 1				
) );
?>

<div id="slider">

	<h3 class="title"><?php _e('Featured Stories', 'wpzoom'); ?></h3>

	<?php if ( $loop->have_posts() ) : ?>

		<div id="slidemain" class="flexslider">
			<ul class="slides">

				<?php rewind_posts(); 
			
				while ( $loop->have_posts() ) : $loop->the_post();

					$video = get_post_meta( $post->ID, 'wpzoom_post_embed_code', true ); 

					?><li class="post-<?php echo $post->ID; ?>">
 					 
 						<?php
							if ( strlen( $video ) > 1 ) { // Embedding video 
								echo '<div class="video_cover">' . embed_fix( $video, 480, 270 ) . '</div>'; // add wmode=transparent to iframe/embed
							} else {
								get_the_image( array( 'size' => 'featured', 'before' => '<div class="cover">', 'after' => '</div>', 'width' => 480, 'height' => 330 ) );
							}
						?>
 					  
						<div class="slide_content">
 
							<h2><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>

							<div class="featured-meta">
								<?php if (option::get('featured_date') == 'on') { ?><span><?php echo get_the_date(); ?></span><?php if (option::get('featured_comments') == 'on') { ?><span class="separator">&mdash;</span><?php } ?><?php } ?>
	 							<?php if (option::get('featured_comments') == 'on') { ?><span><?php comments_popup_link( __('0 comments', 'wpzoom'), __('1 comment', 'wpzoom'), __('% comments', 'wpzoom'), '', __('Comments are Disabled', 'wpzoom')); ?></span><?php } ?>
 							</div>

							<?php the_excerpt(); ?>
 
						</div>
 
						<div class="clear"></div>

					</li><?php

				endwhile;
 				 
				?> 

			</ul>

 		</div>
 
	<?php else : ?>

		<div class="notice">
			There are no featured posts. Start marking posts as featured, or disable the slider from <strong><a href="<?php echo home_url(); ?>/wp-admin/admin.php?page=wpzoom_options">Theme Options</a></strong>. <br />
		    For more information please <strong><a href="http://www.wpzoom.com/documentation/alpha/">read the documentation</a></strong>.
		</div><!-- /.notice -->

 	<?php endif; ?>

</div><!-- /#slider --> 

<?php wp_reset_query(); ?>