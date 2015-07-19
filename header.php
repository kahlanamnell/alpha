<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  	<?php if (option::get('sidebar_pos') == 'Left') { ?><style type="text/css">#sidebar { float:left; } #main, .single-area { float:right; } </style> <?php } ?>

    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  	<header id="header">

 		<div id="menutop">
			<div class="inner-wrap">

				<?php if ( has_nav_menu( 'secondary' ) ) { ?>

	 				<a class="btn_menu" id="toggle-top" href="#"></a>

	 				<div id="topmenu-wrap">

					 	<?php
							wp_nav_menu( array(
								'container' => 'menu',
								'container_class' => '',
								'menu_class' => 'dropdown',
								'menu_id' => 'topmenu',
								'sort_column' => 'menu_order',
								'theme_location' => 'secondary'
							) );
						?>

					</div>

				<?php } ?>

				<?php if ( is_active_sidebar( 'header' ) ) { ?>
					<div id="navsocial">

						<?php dynamic_sidebar('Header Social Icons'); ?>

		 			</div>
				<?php } ?>

	 			<div class="clear"></div>

 			</div><!-- /.inner-wrap -->

		</div><!-- /#menutop -->

  		<div class="inner-wrap header-wrap">

 			<div id="logo">
				<?php if (!option::get('misc_logo_path')) { echo "<h1>"; } ?>

				<a href="<?php echo home_url(); ?>" title="<?php bloginfo('description'); ?>">
					<?php if (!option::get('misc_logo_path')) { bloginfo('name'); } else { ?>
						<h1><img src="<?php echo ui::logo(); ?>" alt="<?php bloginfo('name'); ?>" /></h1>
					<?php } ?>
				</a>

				<?php if (!option::get('misc_logo_path')) { echo "</h1>"; } ?>
			</div><!-- / #logo -->


			<?php if (option::get('ad_head_select') == 'on') { ?>
				<div class="adv">

					<?php if ( option::get('ad_head_code') <> "") {
						echo stripslashes(option::get('ad_head_code'));
					} else { ?>
						<a href="<?php echo option::get('banner_top_url'); ?>"><img src="<?php echo option::get('banner_top'); ?>" alt="<?php echo option::get('banner_top_alt'); ?>" /></a>
					<?php } ?>

				</div><!-- /.adv --> <div class="clear"></div>
			<?php } ?>

			<div class="clear"></div>


			<div id="menu">

				<a class="btn_menu" id="toggle-main" href="#"></a>

				<div id="menu-wrap">

					<?php if ( has_nav_menu( 'primary' ) ) {
						wp_nav_menu( array(
							'container' => 'menu',
							'container_class' => '',
							'menu_class' => 'dropdown',
							'menu_id' => 'mainmenu',
							'sort_column' => 'menu_order',
							'theme_location' => 'primary'
						) );
					} else {
						echo '<p>' . sprintf( __( 'Please set your Main navigation menu on the <strong><a href="%s">Appearance > Menus</a></strong> page.', 'wpzoom' ), admin_url('nav-menus.php') ) . '</p>';
					}
					?>

				</div>

				<?php //if (option::get('search_form') == 'on') { get_search_form(); } ?>

				<div class="clear"></div>

		 	</div><!-- /#menu -->

		</div><!-- /.inner-wrap -->

	</header>

	<?php if (option::get('breaking_on') == 'on') { get_template_part('breaking-news'); } ?>

	<div class="container">
		<div class="content-wrap">