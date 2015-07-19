<?php
/*
Template Name: Archives Page
*/
?>
<?php get_header(); ?>
 
<div class="single-area">

	<?php while (have_posts()) : the_post(); ?>

		<div class="post-meta">
				 
		 	<h1 class="title"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h1>
	 
 			<?php edit_post_link( __('Edit', 'wpzoom'), '', ''); ?>
		
		</div><!-- /.post-meta -->
 

		<div class="clearfix post-wrap"> 
	 
			<div class="entry">
				<div class="col_arch">
					<div class="left">
				<?php _e('By Months:', 'wpzoom'); ?>	 
				</div>
				<div class="right"> 
					<ul>											  
						<?php wp_get_archives('type=monthly&show_post_count=1') ?>	
					</ul>	
				</div>
				</div>
			
				<div class="col_arch">
					<div class="left">
				<?php _e('By Categories:', 'wpzoom'); ?>	 
				</div>
				<div class="right"> 
					<ul>											  
						<?php wp_list_categories('title_li=&hierarchical=0&show_count=1') ?>	
					</ul>	
				</div>
				</div>
			
				<div class="col_arch">
					<div class="left">
				<?php _e('By Tags:', 'wpzoom'); ?>	 
				</div>
				<div class="right"> 
					<?php wp_tag_cloud('format=list&smallest=14&largest=14&unit=px'); ?>
				</div>
				</div>
			</div><!-- / .entry --> 
				<div class="clear"></div>   
		    
		</div><!-- / .post -->
	
	<?php endwhile; ?>  

</div><!-- /.single-area -->
	
<?php get_sidebar();  ?>
<?php get_footer(); ?>