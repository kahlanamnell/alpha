<?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; ?>

<div id="recent-posts" class="clearfix">
 
<?php while (have_posts()) : the_post(); ?>
	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <?php if ( get_post_type( get_the_ID() ) == "coupon") { ?>
    <div class="coupon-corner"></div>
    <?php } ?>
  
	 	<?php if (option::get('index_thumb') == 'on') {
     
			get_the_image( array( 'size' => 'loop', 'width' => option::get('thumb_width'), 'height' => option::get('thumb_height'), 'before' => '<div class="post-thumb">', 'after' => '</div>' ) );
	    } ?>
 		 
		<div class="post-content">	
			
			<h2><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'wpzoom' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
 
 			<div class="entry">
				<?php
					if ( option::get('display_content') == 'Full Content' ) {
						the_content( option::get('display_readmore') == 'on' ? __( 'Read More &#8250;', 'wpzoom' ) : '' );
					} elseif ( option::get('display_content') == 'Excerpt' ) {
						the_excerpt();
 					}
				?>
				
			</div><!-- /.entry -->
			
			<div class="recent-meta">
				<?php if (option::get('display_author') == 'on') { ?><span><?php _e('by', 'wpzoom'); ?> <?php the_author_posts_link(); ?></span> <span class="separator">&mdash;</span><?php } ?>
				<?php if (option::get('display_date') == 'on') { ?><span><?php printf( __('%s', 'wpzoom'),  get_the_date()); ?></span> <span class="separator">&mdash;</span><?php } ?>
				<?php if (option::get('display_comments') == 'on') { ?><span><?php comments_popup_link( __('0 comments', 'wpzoom'), __('1 comment', 'wpzoom'), __('% comments', 'wpzoom'), '', __('Comments are Disabled', 'wpzoom')); ?></span> <span class="separator">&mdash;</span><?php } ?>
				<?php if (option::get('display_category') == 'on') { ?><span><?php the_category(', '); ?></span><?php } ?>
				<?php edit_post_link( __('Edit', 'wpzoom'), '<span class="separator">&mdash;</span> <span>', '</span>'); ?>
			</div><!-- /.post-meta -->	
  
		</div><!-- /.post-content -->
	
		<div class="clear"></div>

	</div><!-- #post-<?php the_ID(); ?> -->

<?php endwhile; ?>
<?php get_template_part( 'pagination'); ?>
<?php wp_reset_query(); ?>
</div>
