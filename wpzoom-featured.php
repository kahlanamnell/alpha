	<div class="featured-grid clearfix"> 
	<?php
		for ( $i = 1; $i <= 4; $i++ ) {

			/*
			$catid = option::get('featured_category_' . $i);
			$cat = get_category($catid, false);
			$catlink = get_category_link($catid);
			$breaking_cat = "cat=$catid";
			*/
			
			$pid = option::get('featured_category_' . $i);
			$q = "p=$pid";
			
			?>

	 		<?php
			query_posts( $q );
			
			while (have_posts()) :
				the_post(); ?>

				<div class="featured-post">

					<?php get_the_image( array( 'size' => 'featured-posts', 'link_to_post' => false, 'width' => 75, 'height' => 75 ) );  ?>

					<div class="post-content">
		 				<h3><a href="<?php the_permalink() ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>

					</div>
	 			</div>

			<?php endwhile; ?> 
		 

		<?php } ?>
 	</div>
	 
 	<?php wp_reset_query(); ?>
 	<div class="clear"></div>