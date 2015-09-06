<?php
/**
 * Theme functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 */

if ( ! function_exists( 'alpha_setup' ) ) :
/**
 * Theme setup.
 *
 * Set up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support post thumbnails.
 */
function alpha_setup() {

    /* Featured Slider */
    add_image_size( 'featured', 480, 330, true);

    /* Featured Posts at the Top */
    add_image_size( 'featured-posts', 75, 75, true);

    /* Featured Category  */
    add_image_size( 'featured-cat', 300, 200, true );
    add_image_size( 'featured-cat-small', 100, 75, true );

    /* Video Widget */
    add_image_size( 'video-widget', 300, 170, true );

    /* Default Thumbnail */
    add_image_size( 'loop', option::get('thumb_width'), option::get('thumb_height'), true );

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );

    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support( 'title-tag' );

    // Register nav menus
    register_nav_menus( array(
        'secondary' => __( 'Top Menu', 'wpzoom' ),
        'primary' => __( 'Main Menu', 'wpzoom' )
    ) );
}
endif;
add_action( 'after_setup_theme', 'alpha_setup' );



/* Register Video Post Format
==================================== */

add_theme_support( 'post-formats', array( 'video' ) );


/* Video auto-thumbnail
==================================== */

if (is_admin()) {
    WPZOOM_Video_Thumb::init();
}



/* Add support for Custom Background
==================================== */

add_theme_support( 'custom-background' );


/* Replaces the excerpt "more" text by a link
=========================================== */

if ( ! function_exists( 'new_excerpt_more' ) ) {

    function new_excerpt_more($more) {
           global $post;
      return '<a class="more-link" href="'. get_permalink($post->ID) . '">['.__('Read More', 'wpzoom').'...]</a>';
    }
    add_filter('excerpt_more', 'new_excerpt_more');

}


/* Custom Excerpt Length
==================================== */

if ( ! function_exists( 'new_excerpt_length' ) ) {

    function new_excerpt_length($length) {
    	return (int) option::get("excerpt_length") ? (int) option::get("excerpt_length") : 50;
    }
    add_filter('excerpt_length', 'new_excerpt_length');

}

/* Reset [gallery] shortcode styles
==================================== */

add_filter('gallery_style', create_function('$a', 'return "<div class=\'gallery\'>";'));



/* Maximum width for images in posts
=========================================== */
if ( ! isset( $content_width ) ) $content_width = 690;



/* Tabbed Widget
============================ */

if ( ! function_exists( 'tabber_tabs_load_widget' ) ) {

    function tabber_tabs_load_widget() {
      // Register widget.
      register_widget( 'WPZOOM_Widget_Tabber' );
    }

}



/**
 * Temporarily hide the "tabber" class so it does not "flash"
 * on the page as plain HTML. After tabber runs, the class is changed
 * to "tabberlive" and it will appear.
 */

if ( ! function_exists( 'tabber_tabs_temp_hide' ) ) {

    function tabber_tabs_temp_hide(){
      echo '<script type="text/javascript">document.write(\'<style type="text/css">.tabber{display:none;}</style>\');</script>';
    }

}


// Function to check if there are widgets in the Tabber Tabs widget area
// Thanks to Themeshaper: http://themeshaper.com/collapsing-wordpress-widget-ready-areas-sidebars/

if ( ! function_exists( 'is_tabber_tabs_area_active' ) ) {

    function is_tabber_tabs_area_active( $index ){
      global $wp_registered_sidebars;

      $widgetcolums = wp_get_sidebars_widgets();

      if ($widgetcolums[$index]) return true;

      return false;
    }

}


 // Let's build a widget
class WPZOOM_Widget_Tabber extends WP_Widget {

  function __construct() {
    $widget_ops = array( 'classname' => 'tabbertabs', 'description' => __('Drag me to the Sidebar', 'wpzoom') );
    $control_ops = array( 'width' => 230, 'height' => 300, 'id_base' => 'wpzoom-tabber' );
    parent::__construct( 'wpzoom-tabber', __('WPZOOM: Tabs', 'wpzoom'), $widget_ops, $control_ops );
  }

  function widget( $args, $instance ) {
    extract( $args );

    $style = $instance['style']; // get the widget style from settings

    echo "\n\t\t\t" . $before_widget;

    // Show the Tabs
    echo '<div class="tabber">'; // set the class with style
      if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('tabber_tabs') )
    echo '</div>';

    echo "\n\t\t\t" . $after_widget;
   }

  function update( $new_instance, $old_instance ) {
    $instance = $old_instance;
    $instance['style'] = $new_instance['style'];

    return $instance;
  }

  function form( $instance ) {

    //Defaults
    $defaults = array( 'title' => __('Tabber', 'wpzoom'), 'style' => 'style1' );
    $instance = wp_parse_args( (array) $instance, $defaults ); ?>

    <div style="float:left;width:98%;"></div>
    <p>
    <?php _e('Place your widgets in the <strong>WPZOOM: Tabs Widget Area</strong> and have them show up here.', 'wpzoom')?>
    </p>

    <div style="clear:both;">&nbsp;</div>
  <?php
  }
}

/* Tabber Tabs Widget */
tabber_tabs_plugin_init();


/* Initializes the plugin and it's features. */

    function tabber_tabs_plugin_init() {

      // Loads and registers the new widget.
      add_action( 'widgets_init', 'tabber_tabs_load_widget' );

      //Registers the new widget area.
      register_sidebar(
        array(
          'name' => __('WPZOOM: Tabs Widget Area', 'wpzoom'),
          'id' => 'tabber_tabs',
          'description' => __('Build your tabbed area by placing widgets here.  !! DO NOT PLACE THE WPZOOM: TABS IN THIS AREA.', 'wpzoom'),
          'before_widget' => '<div id="%1$s" class="tabbertab %2$s">',
          'after_widget' => '</div>'
        )
      );

      // Hide Tabber until page load
      add_action( 'wp_head', 'tabber_tabs_temp_hide' );

    }


/* Fix widgets no-title bug
==================================== */

add_filter ('widget_title', 'wpzoom_fix_widgets');

if ( ! function_exists( 'wpzoom_fix_widgets' ) ) {

    function wpzoom_fix_widgets($content) {

      $title = $content;

      if (!$title)
      {
        $content = '<div class="empty"></div>';
      }

        return $content;
    }

}



/* Enqueue scripts and styles for the front end.
=========================================== */

if ( ! function_exists( 'alpha_scripts' ) ) {

    function alpha_scripts() {

        $protocol = is_ssl() ? 'https' : 'http';

        // Load our main stylesheet.
        wp_enqueue_style( 'alpha-style', get_stylesheet_uri() );

        wp_enqueue_style( 'media-queries', get_template_directory_uri() . '/css/media-queries.css', array(), WPZOOM::$themeVersion );

        wp_enqueue_script( 'flexslider', get_template_directory_uri() . '/js/flexslider.js', array( 'jquery' ), WPZOOM::$themeVersion, true );

        wp_enqueue_script( 'caroufredsel', get_template_directory_uri() . '/js/jquery.carouFredSel.js', array( 'jquery' ), WPZOOM::$themeVersion, true );

        wp_enqueue_script( 'fitvids', get_template_directory_uri() . '/js/fitvids.min.js', array( 'jquery' ), WPZOOM::$themeVersion, true );

        wp_enqueue_script( 'dropdown', get_template_directory_uri() . '/js/dropdown.js', array( 'jquery' ), WPZOOM::$themeVersion, true );

        wp_enqueue_script( 'tabs', get_template_directory_uri() . '/js/tabs.js', array( 'jquery' ), WPZOOM::$themeVersion, true );

        wp_enqueue_script( 'placeholder', get_template_directory_uri() . '/js/jquery.placeholder.min.js', array( 'jquery' ), WPZOOM::$themeVersion, true );

        /* Google Fonts */
        wp_enqueue_style( 'google-fonts', "$protocol://fonts.googleapis.com/css?family=Roboto:400,700|Sintony:400,700" );

        wp_enqueue_script( 'alpha-script', get_template_directory_uri() . '/js/functions.js', array( 'jquery' ), WPZOOM::$themeVersion, true );

    }

}

add_action( 'wp_enqueue_scripts', 'alpha_scripts' );