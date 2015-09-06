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
	
	<script type="text/javascript">
	(function() {
		var s   = document.createElement('script');
		s.type  = 'text/javascript';
		s.async = true;
		s.src   = document.location.protocol + '//cdn.nativendo.de/nativendo.js';
		var sc  = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(s, sc);
	})();
	</script>
	
	<script>(function() { 
	  var _fbq = window._fbq || (window._fbq = []); 
	  if (!_fbq.loaded) { 
		var fbds = document.createElement('script'); 
		fbds.async = true; 
		fbds.src = '//connect.facebook.net/en_US/fbds.js'; 
		var s = document.getElementsByTagName('script')[0]; 
		s.parentNode.insertBefore(fbds, s); 
		_fbq.loaded = true; 
	  } 
	  _fbq.push(['addPixelId', '309253535906926']); 
	})(); 
	window._fbq = window._fbq || []; 
	window._fbq.push(['track', 'PixelInitialized', {}]); 
	</script>
  
  <script>document.cookie='resolution='+Math.max(screen.width,screen.height)+'; path=/';</script>

    <?php wp_head(); ?>
</head>
<body <?php body_class() ?>>
 
    <div class="cookies" id="cookies">
      <div class="body">
       
        <p>Diese Seite benutzt Cookies. Durch das Weitersurfen erklären Sie sich mit der Nutzung von Cookies einverstanden</p>
        <ul class="actions">
                <li class="blue"><a href="#">Cookies akzeptieren</a></li>
        </ul>
        <!-- /.actions -->
                <a class="go" href="/datenschutz/#cookie-info">Mehr über Cookies erfahren</a>
      </div>
    </div>
    
  	<header id="header">

 		<div id="menutop">
			<div class="inner-wrap">
  
				<?php if ( has_nav_menu( 'secondary' ) ) { ?>
	 
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
						<?php if (is_home()) { ?>
							<h1><img src="<?php echo ui::logo(); ?>" alt="<?php echo get_bloginfo('name') . " - " . get_bloginfo('description'); ?>" /></h1>
						<?php } else { ?>
							<img src="<?php echo ui::logo(); ?>" alt="<?php echo get_bloginfo('name') . " - " . get_bloginfo('description'); ?>" />
						<?php } ?>
					<?php } ?>
				</a>
				
				<?php if (!option::get('misc_logo_path')) { echo "</h1>"; } ?>
        <div id="search-tip" style="display:none;"><p>Reiseangebote und Informationen finden.</p><a></a></div>
        <div id="social-signs">
          <ul>
            <li><a class="facebook" href="https://www.facebook.com/Ratgeber.Reise" rel="external,nofollow" title="Facebook"><img src="http://www.ratgeber.reise/wp-content/themes/alpha/images/icons/facebook.png" alt="Facebook"></a></li>
            <li><a class="twitter" href="https://twitter.com/ratgeberreise/" rel="external,nofollow" title="Twitter"><img src="http://www.ratgeber.reise/wp-content/themes/alpha/images/icons/twitter.png" alt="Twitter"></a></li>
            <li><a class="google plus" href="https://www.google.com/+ratgeber-reise-info" rel="external,nofollow" title="Google+"><img src="http://www.ratgeber.reise/wp-content/themes/alpha/images/icons/google plus.png" alt="Google+"></a></li>
            <li><a class="pinterest" href="http://pinterest.com/ratgeberreise/" rel="external,nofollow" title="Pinterest"><img src="http://www.ratgeber.reise/wp-content/themes/alpha/images/icons/pinterest.png" alt="Pinterest"></a></li>
            <li><a class="rss" href="/feed/" rel="external,nofollow" title="RSS Feed"><img src="http://www.ratgeber.reise/wp-content/themes/alpha/images/icons/rss.png" alt="RSS Feed"></a></li>
          </ul>
        </div>
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
      
        <?php //if (option::get('search_form') == 'on') { get_search_form(); } ?>

				<div id="menu-wrap">
		 
					<?php if ( has_nav_menu( 'primary' ) ) { 
						wp_nav_menu( array(
							'container' => 'menu',
							'container_class' => '',
							'menu_class' => 'dropdown',
							'menu_id' => 'mainmenu',
							'sort_column' => 'menu_order',
							'theme_location' => 'primary',
              //'walker' => new Walker_Nav_Menu_Costum
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