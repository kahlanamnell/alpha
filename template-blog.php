<?php
/*
Template Name: Blog
*/
?>

<?php get_header(); ?>

<section id="main" role="main">
	<div class="main-area">

		<div class="archiveposts">
 	
		<h3 class="title">
			<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'wpzoom' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
		</h3>
	 
		<?php // WP 3.0 PAGED BUG FIX
			if ( get_query_var('paged') )
				$paged = get_query_var('paged');
			elseif ( get_query_var('page') ) 
				$paged = get_query_var('page');
			else 
				$paged = 1;
			//$paged = (get_query_var('paged')) ? get_query_var('paged') : 1; 
			 
			query_posts("paged=$paged"); if (have_posts()) : 
			?>
			
				<?php get_template_part('loop'); ?>

			<?php endif; ?>
  
		</div> <!-- /#content -->
	</div> <!-- /#main -->
</section>

<?php get_sidebar();  ?>
<?php get_footer(); ?>  