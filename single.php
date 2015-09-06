<?php get_header(); ?>
<?php $template = get_post_meta($post->ID, 'wpzoom_post_template', true);  ?>

<div class="<?php if ($template == 'full') { echo "single-area-full"; } else { echo "single-area"; } ?>">

	<?php while (have_posts()) : the_post(); ?>
 
		<div class="post-meta">
			 
		 	<h1 class="title">
				<?php the_title(); ?>
			</h1>

			<?php if (option::get('post_category') == 'on') { ?><?php _e('in', 'wpzoom'); ?> <?php the_category('<span class="separator"> / </span>'); ?> <span class="separator">&mdash;</span><?php } ?>
  			<?php if (option::get('post_author') == 'on') { ?><?php _e('by', 'wpzoom'); ?> <?php the_author_posts_link(); ?> <span class="separator">&mdash;</span><?php } ?>
			<?php if (option::get('post_date') == 'on') { ?><?php echo get_the_date(); ?><?php } ?>
 			<?php edit_post_link( __('Edit', 'wpzoom'), '<span class="separator">&mdash;</span> ', ''); ?>
		
		</div><!-- /.post-meta -->

	  
		<div id="post-<?php the_ID(); ?>" <?php post_class('clearfix post-wrap'); ?>>
 	 	  
			<div class="entry">
				<?php the_content(); ?>
				<div class="clear"></div>
				
				<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'wpzoom' ) . '</span>', 'after' => '</div>' ) ); ?>
				<div class="clear"></div>
			
			</div><!-- / .entry -->
			<div class="clear"></div>
 	 	
			<?php if (option::get('post_tags') == 'on') { ?><?php the_tags( '<div class="tag_list">'. __('Tags:', 'wpzoom'). ' ',', ', '</div>'); ?><?php } ?>

 	 	</div><!-- #post-<?php the_ID(); ?> -->

		<?php if (option::get('post_share') == 'on') { ?>
			<div class="share_box">
					<div class="share_btn"><a href="http://twitter.com/share" data-url="<?php the_permalink() ?>" class="twitter-share-button" data-count="horizontal">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div>
				<div class="share_btn"><iframe src="http://www.facebook.com/plugins/like.php?href=<?php echo urlencode(get_permalink($post->ID)); ?>&amp;layout=button_count&amp;show_faces=false&amp;width=1000&amp;action=like&amp;font=arial&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:80px; height:21px;" allowTransparency="true"></iframe></div>
				<div class="share_btn"><g:plusone size="medium"></g:plusone></div>
				<div class="clear"></div>
			</div> 
		<?php } ?>

		<?php if (option::get('post_authorbio') == 'on') { ?>		
			<div class="post_author">
				<?php echo get_avatar( get_the_author_meta('ID') , 70 ); ?>
				
				<span><?php _e('Author:', 'wpzoom'); ?> <?php the_author_posts_link(); ?></span>
				
				<p><?php the_author_meta('description'); ?></p>

				<div class="clear"></div>

				<span class="author_links">
					<ul>
						<li><?php _e('Visit Author', 'wpzoom'); ?>:</li>

						<?php if ( get_the_author_meta( 'user_url' ) ) { ?><li><a href="<?php echo the_author_meta('user_url'); ?>"><?php _e('Website', 'wpzoom'); ?></a></li><?php } ?>
						
						<?php if ( get_the_author_meta( 'twitter' ) ) { ?><li><a href="http://twitter.com/<?php the_author_meta( 'twitter' ); ?>" title="Follow <?php the_author_meta( 'display_name' ); ?> on Twitter" target="_blank"><?php _e('Twitter', 'wpzoom'); ?></a></li><?php } ?>
						
						<?php if ( get_the_author_meta( 'facebook_url' ) ) { ?><li><a href="<?php the_author_meta( 'facebook_url' ); ?>" title="Facebook Profile" target="_blank"><?php _e('Facebook', 'wpzoom'); ?></a></li><?php } ?>
						
						<li><a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>"><?php _e('All Posts', 'wpzoom'); ?></a></li>
					</ul>
				</span>
			</div>
		<?php } ?>

		<div class="clear"></div>

    <?php if ( !empty( get_field('autor_box'))) : ?>
      <div class="post-wrap"><?php the_field('autor_box'); ?></div>
    <?php endif; ?>
    
    <div class="clear"></div>
	 	 
		<?php if (option::get('post_comments') == 'on') { ?>
			<div class="post-wrap"><?php comments_template(); ?></div>
		<?php } ?>
		
	<?php endwhile; ?>
  
</div><!-- /.single-area -->
	
	
<?php if ($template != 'full') { 
	get_sidebar(); 
} else { echo "<div class=\"clear\"></div>"; } ?>
 
<?php get_footer(); ?> 