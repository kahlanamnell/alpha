<?php get_header(); 
 	if (is_author()) { 
		$curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
	}
?>

<section id="main" role="main">
	<div class="main-area">

		<div class="archiveposts">
		
			<h1 class="title"> 
				<?php /* category archive */ if (is_category()) { ?> <?php single_cat_title(); ?>
				<?php /* tag archive */ } elseif( is_tag() ) { ?><?php _e('Post Tagged with:', 'wpzoom'); ?> "<?php single_tag_title(); ?>"
				<?php /* daily archive */ } elseif (is_day()) { ?><?php _e('Archive for', 'wpzoom'); ?> <?php the_time('F jS, Y'); ?>
				<?php /* monthly archive */ } elseif (is_month()) { ?><?php _e('Archive for', 'wpzoom'); ?> <?php the_time('F, Y'); ?>
				<?php /* yearly archive */ } elseif (is_year()) { ?><?php _e('Archive for', 'wpzoom'); ?> <?php the_time('Y'); ?>
				<?php /* author archive */ } elseif (is_author()) { ?><?php _e( ' Articles by: ', 'wpzoom' ); ?><a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->display_name; ?></a>  
				<?php /* paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?><?php _e('Archives', 'wpzoom'); } ?>
			</h1>
		   
			<?php get_template_part('loop'); ?>
	 			
		</div> <!-- /#content -->
	</div> <!-- /#main -->
</section>

<?php get_sidebar(); ?> 

<?php get_footer(); ?> 