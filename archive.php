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
				<?php /* daily archive */ } elseif (is_day()) { ?><?php _e('Archive for', 'wpzoom'); ?> <?php the_time('F jS, Y'); ?>
				<?php /* monthly archive */ } elseif (is_month()) { ?><?php _e('Archive for', 'wpzoom'); ?> <?php the_time('F, Y'); ?>
				<?php /* yearly archive */ } elseif (is_year()) { ?><?php _e('Archive for', 'wpzoom'); ?> <?php the_time('Y'); ?>
				<?php /* author archive */ } elseif (is_author()) { ?><?php _e( ' Articles by: ', 'wpzoom' ); ?><a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->display_name; ?></a>  
				<?php /* paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?><?php _e('Archives', 'wpzoom'); } ?>
			</h3>
      
      <?php
        $queried_object = get_queried_object(); 
        if ( !empty( get_field('landing_text_oben', $queried_object))) :
      ?>
        <div class="post"><?php the_field('landing_text_oben', $queried_object);?></div>
      <?php endif;?>
      
			<?php get_template_part('loop'); ?>
      
      <?php if ( !empty( get_field('landing_text_oben', $queried_object))) : ?>
        <div class="post"><?php the_field('landing_text_unten', $queried_object);?></div>
      <?php endif;?>
      
      <?php if ( is_author() && !empty( get_field('autor_archiv_text_unten', $queried_object))) : ?>
        <div class="post"><?php the_field('autor_archiv_text_unten', $queried_object);?></div>
      <?php endif;?>
      
	 			
		</div> <!-- /#content -->
	</div> <!-- /#main -->
</section>

<?php get_sidebar(); ?> 

<?php get_footer(); ?> 
