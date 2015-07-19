<?php get_header(); ?>
   
	<div class="single-area">

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<div class="post-meta">
 				 
			 	<h1 class="title"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h1>
 	 
	 			<?php edit_post_link( __('Edit', 'wpzoom'), '', ''); ?>
			
			</div><!-- /.post-meta -->
	 

			<div class="clearfix post-wrap">
			 	 	  
				<div class="entry">
					<?php the_content(); ?>
					<div class="clear"></div>
					
					<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'wpzoom' ) . '</span>', 'after' => '</div>' ) ); ?>
					<div class="clear"></div>
				
				</div><!-- / .entry -->
				<div class="clear"></div>
	 	 	 
	 	 	</div> 
			  
			<div class="clear"></div>
			
			<?php if (option::get('comments_page') == 'on') { ?>
				<div class="post-wrap"><?php comments_template(); ?></div>
			<?php } ?>
		 
		<?php endwhile; else: ?>

			<p><?php _e('Sorry, no posts matched your criteria.', 'wpzoom');?></p>
			
		<?php endif; ?>
 
	</div> <!-- /.single-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>