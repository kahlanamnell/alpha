<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?php ui::title(); ?></title>

    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" media="screen" />
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,700|Sintony:400,700' rel='stylesheet' type='text/css'>
 	<?php if (option::get('sidebar_pos') == 'Left') { ?><style type="text/css">#sidebar { float:left; } #main, .single-area { float:right; } </style> <?php } ?>

    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <link rel="stylesheet" href="<?=bloginfo('template_url')?>/styles/ammap.css" type="text/css">
    <script src="<?=bloginfo('template_url')?>/js/ammap.js" type="text/javascript"></script>
    <!-- map file should be included after ammap.js -->
    <script src="<?=bloginfo('template_url')?>/js/worldLow.js" type="text/javascript"></script>
    
    <script type="text/javascript">
        var map = AmCharts.makeChart("mapdiv", {

                type: "map",
                pathToImages: "<?=bloginfo('template_url')?>/images/ammap/",

                dataProvider: {
                        map: "worldLow",
                        zoomLevel: 1,
                        zoomLongitude: 22,
                        zoomLatitude: 37,
                        areas: [{
                                        title: "Zypern",
                                        id: "CY",
                                        color: "#3366CC",
                                        customData: "1995",
                                        url: "http://www.ratgeber.reise/weltreise/zypern/",
                                },
                                {
                                        title: "Japan",
                                        id: "JP",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/japan/",
								},
                                {
                                        title: "Australien",
                                        id: "AU",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/australien/",
								},
								{
                                        title: "Griechenland",
                                        id: "GR",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/griechenland/",
								},
                                {
                                        title: "Ägypten",
                                        id: "EG",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/aegypten/",
								},
                                {
                                        title: "Kroatien",
                                        id: "HR",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/kroatien/",
								},
                                {
                                        title: "Dänemark",
                                        id: "DK",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/daenemark/",
								},
                                {
                                        title: "Brasilien",
                                        id: "BR",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/brasilien/",
								},
                                {
                                        title: "USA",
                                        id: "US",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/usa/",
								},
                                {
                                        title: "Österreich",
                                        id: "AT",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/oesterreich/",
								},
                                {
                                        title: "Kanada",
                                        id: "CA",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/kanada/",
								},
                                {
                                        title: "Sri Lanka",
                                        id: "LK",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/sri-lanka/",
								},
                                {
                                        title: "Irland",
                                        id: "IE",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/irland/",
								},
                                {
                                        title: "China",
                                        id: "CN",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/china/",
								},
                                {
                                        title: "Portugal",
                                        id: "PT",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/portugal/",
                },
                                {
                                        title: "Malta",
                                        id: "MT",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/malta/",
                },
                                {
                                        title: "Thailand",
                                        id: "TH",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/thailand/",
                },
                                {
                                        title: "Frankreich",
                                        id: "FR",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/frankreich/",
                },
                                {
                                        title: "Dominikanische Republik",
                                        id: "DO",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/dominikanische-republik/",
                },
                                {
                                        title: "Spanien",
                                        id: "ES",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/spanien/",
                },
                                {
                                        title: "Costa Rica",
                                        id: "CR",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/costa-rica/",
                },
                                {
                                        title: "Schweiz",
                                        id: "CH",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/schweiz/",
                },
                                {
                                        title: "Kuba",
                                        id: "CU",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/kuba/",
                },
                                {
                                        title: "Türkei",
                                        id: "TR",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/tuerkei/",
                },
                                {
                                        title: "Taiwan",
                                        id: "TW",
                                        color: "#3366CC",
                                        url: "http://www.ratgeber.reise/weltreise/taiwan/",
                }
                        ]
                },

                areasSettings: {
                        unlistedAreasColor: "#DDDDDD",
                        rollOverOutlineColor: "#FFFFFF",
                        rollOverColor: "#CC0000",
                        balloonText: "[[title]]"
                },

        });
    </script>

    <?php wp_head(); ?>
</head>
<body <?php body_class() ?>>
 
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
						<img src="<?php echo ui::logo(); ?>" alt="<?php bloginfo('name'); ?>" />
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
		
				<div class="clear"></div>
  
		 	</div><!-- /#menu -->
  
		</div><!-- /.inner-wrap -->
	 
	</header>

	<?php if (option::get('breaking_on') == 'on') { get_template_part('breaking-news'); } ?>

	<div class="container"> 
		<div class="content-wrap">

<section id="main" role="main">
	<div class="main-area">

		<div class="archiveposts">
		
			<h1 class="title">Weltreise Länder</h1>
                        <div class="post">
                            <center> <div id="mapdiv" style="width: 600px; background-color:#eeeeee; height: 375px;"></div></center>
                        </div>
                        
                        <?php get_template_part('loop'); ?>
	 			
		</div> <!-- /#content -->
	</div> <!-- /#main -->
</section>

<?php get_sidebar(); ?> 

<?php get_footer(); ?> 
