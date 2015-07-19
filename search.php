<?php get_header(); ?>

<section id="main" role="main">
	<div class="main-area">

		<div class="archiveposts">
  		
  			<h3 class="title"><?php _e('Search Results for','wpzoom');?> <strong>"<?php the_search_query(); ?>"</strong> <?php $total_results = $wp_query->found_posts; echo ": " .$total_results. " "; ?> <?php _e('results','wpzoom');?></h3>
 
 			<?php get_template_part('loop'); ?>
	
		</div><!-- /.archiveposts -->
	</div><!-- /.main-area -->

</section>	

<?php get_sidebar(); ?>
<?php get_footer(); ?> 