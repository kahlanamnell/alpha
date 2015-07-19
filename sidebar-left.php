<?php if ( is_active_sidebar( 'sidebar-alt'  ) || option::get('banner_sidebarleft_enable') == 'on' ) : ?>

	<div class="sidebar-alt">
	
		<?php if (option::get('banner_sidebarleft_enable') == 'on' && option::get('banner_sidebarleft_position') == 'Before widgets') { ?>
			<div class="adv_side">
			
				<?php if ( option::get('banner_sidebarleft_html') <> "") { 
					echo stripslashes(option::get('banner_sidebarleft_html'));             
				} else { ?>
					<a href="<?php echo option::get('banner_sidebarleft_url'); ?>"><img src="<?php echo option::get('banner_sidebarleft'); ?>" alt="<?php echo option::get('banner_sidebarleft_alt'); ?>" /></a>
				<?php } ?>		   	
					
			</div><!-- /.adv_side -->
		<?php } ?>
	
 	  
		<?php dynamic_sidebar('Left Sidebar'); ?>
 
 			
		<?php if (option::get('banner_sidebarleft_enable') == 'on' && option::get('banner_sidebarleft_position') == 'After widgets') { ?>
			<div class="adv_side">
			
				<?php if ( option::get('banner_sidebarleft_html') <> "") { 
					echo stripslashes(option::get('banner_sidebarleft_html'));             
				} else { ?>
					<a href="<?php echo option::get('banner_sidebarleft_url'); ?>"><img src="<?php echo option::get('banner_sidebarleft'); ?>" alt="<?php echo option::get('banner_sidebarleft_alt'); ?>" /></a>
				<?php } ?>		   	
					
			</div><!-- /.adv_side -->
		<?php } ?>
 	  
 	</div> 

<?php endif; ?>