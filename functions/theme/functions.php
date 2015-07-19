<?php

/* Register Thumbnails Size
================================== */

if ( function_exists( 'add_image_size' ) ) {

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

}


/* CSS file for responsive design
==================================== */

function responsive_styles() {
    wp_enqueue_style( 'media-queries', get_template_directory_uri() . '/media-queries.css', array() );
}
add_action( 'wp_enqueue_scripts', 'responsive_styles' );


/* Register Video Post Format
==================================== */

add_theme_support( 'post-formats', array( 'video' ) ); 
 

/* Video auto-thumbnail
==================================== */

if (is_admin()) {
    WPZOOM_Video_Thumb::init();
}


/* 	Register Custom Menu
==================================== */
register_nav_menu('secondary', 'Top Menu');
register_nav_menu('primary', 'Main Menu');


/* Add support for Custom Background
==================================== */

add_theme_support( 'custom-background' );
 

/* Replaces the excerpt "more" text by a link
=========================================== */

function new_excerpt_more($more) {
       global $post;
  return '<a class="more-link" href="'. get_permalink($post->ID) . '">['.__('Read More', 'wpzoom').'...]</a>';
}
add_filter('excerpt_more', 'new_excerpt_more');


/* Custom Excerpt Length
==================================== */

function new_excerpt_length($length) {
	return (int) option::get("excerpt_length") ? (int) option::get("excerpt_length") : 50;
}
add_filter('excerpt_length', 'new_excerpt_length');


/* Reset [gallery] shortcode styles
==================================== */

add_filter('gallery_style', create_function('$a', 'return "<div class=\'gallery\'>";'));


/* Email validation
==================================== */

function simple_email_check($email) {
    // First, we check that there's one @ symbol, and that the lengths are right
    if (!preg_match("/^[^@]{1,64}@[^@]{1,255}$/", $email)) {
        // Email invalid because wrong number of characters in one section, or wrong number of @ symbols.
        return false;
    }

    return true;
}


/* Maximum width for images in posts
=========================================== */
if ( ! isset( $content_width ) ) $content_width = 690;


/*  Limit Posts           
/*                  
/*  Plugin URI: http://labitacora.net/comunBlog/limit-post.phps
/*  Usage: the_content_limit($max_charaters, $more_link)
===================================================== */

if ( !function_exists( 'the_content_limit' ) ) { 
 
  function the_content_limit($max_char, $more_link_text = '(more...)', $stripteaser = 0, $more_file = '') {
    $content = get_the_content($more_link_text, $stripteaser, $more_file);
    // remove [caption] shortcode
    $content = preg_replace("/\[caption.*\[\/caption\]/", '', $content);
    $content = preg_replace("/\[wzslider.*\]/", '', $content);
    // short codes are applied
    $content = apply_filters('the_content', $content);
    $content = str_replace(']]>', ']]&gt;', $content);
    $content = strip_tags($content);

    if ((strlen($content)>$max_char) && ($espacio = strpos($content, " ", $max_char ))) {
        $content = substr($content, 0, $espacio);
        $content = $content;
        echo "<p>";
        echo $content;
        echo "...";
        echo "</p>";
    }
    else {
      echo "<p>";
      echo $content;
      echo "</p>";
    }
  }
 
} 


/* Video Embed Code Fix
==================================== */

function embed_fix($video,$width,$height) {
 
  $video = preg_replace("/(width\s*=\s*[\"\'])[0-9]+([\"\'])/i", "$1 ".$width." $2", $video);
  $video = preg_replace("/(height\s*=\s*[\"\'])[0-9]+([\"\'])/i", "$1 ".$height." $2", $video);
  if (strpos($video, "<embed src=" ) !== false) {
      $video = str_replace('</param><embed', '</param><param name="wmode" value="transparent"></param><embed wmode="transparent" ', $video);
  }
  else {
    if(strpos($video, "wmode=transparent") == false){
  
      $re1='.*?'; # Non-greedy match on filler
      $re2='((?:\\/{2}[\\w]+)(?:[\\/|\\.]?)(?:[^\\s"]*))';  # HTTP URL 1
  
      if ($c=preg_match_all ("/".$re1.$re2."/is", $video, $matches))
      {
        $httpurl1=$matches[1][0];
      }
  
      if(strpos($httpurl1, "?") == true){
        $httpurl_new = $httpurl1 . '&wmode=transparent';
      }
      else {
        $httpurl_new = $httpurl1 . '?wmode=transparent';
      }
  
      $search = array($httpurl1);
      $replace = array($httpurl_new);
      $video = str_replace($search, $replace, $video);
  
      //print($httpurl_new);
      unset($httpurl_new);
  
    }
  }
  return $video;
}



/* Comments Custom Template           
==================================== */

function wpzoom_comment( $comment, $args, $depth ) {
  $GLOBALS['comment'] = $comment;
  switch ( $comment->comment_type ) :
    case '' :
  ?>
  <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
    <div id="comment-<?php comment_ID(); ?>">
    <div class="comment-author vcard">
      <?php echo get_avatar( $comment, 60 ); ?>
      <?php printf( __( '%s <span class="says">says:</span>', 'wpzoom' ), sprintf( '<cite class="fn">%s</cite>', get_comment_author_link() ) ); ?>
      
      <div class="comment-meta commentmetadata"><a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>">
        <?php printf( __('%s at %s', 'wpzoom'), get_comment_date(), get_comment_time()); ?></a><?php edit_comment_link( __( '(Edit)', 'wpzoom' ), ' ' );
        ?>
        
      </div><!-- .comment-meta .commentmetadata -->
    
    </div><!-- .comment-author .vcard -->
    <?php if ( $comment->comment_approved == '0' ) : ?>
      <em class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.', 'wpzoom' ); ?></em>
      <br />
    <?php endif; ?>

     

    <div class="comment-body"><?php comment_text(); ?></div>

    <div class="reply">
      <?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
    </div><!-- .reply -->
  </div><!-- #comment-##  -->

  <?php
      break;
    case 'pingback'  :
    case 'trackback' :
  ?>
  <li class="post pingback">
    <p><?php _e( 'Pingback:', 'wpzoom' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __( '(Edit)', 'wpzoom' ), ' ' ); ?></p>
  <?php
      break;
  endswitch;
}




/* Tabbed Widget
============================ */

function tabber_tabs_load_widget() {
  // Register widget.
  register_widget( 'WPZOOM_Widget_Tabber' );
}

 
/**
 * Temporarily hide the "tabber" class so it does not "flash"
 * on the page as plain HTML. After tabber runs, the class is changed
 * to "tabberlive" and it will appear.
 */
function tabber_tabs_temp_hide(){
  echo '<script type="text/javascript">document.write(\'<style type="text/css">.tabber{display:none;}</style>\');</script>';
}


// Function to check if there are widgets in the Tabber Tabs widget area
// Thanks to Themeshaper: http://themeshaper.com/collapsing-wordpress-widget-ready-areas-sidebars/
function is_tabber_tabs_area_active( $index ){
  global $wp_registered_sidebars;

  $widgetcolums = wp_get_sidebars_widgets();
     
  if ($widgetcolums[$index]) return true;
  
  return false;
}

 
 // Let's build a widget
class WPZOOM_Widget_Tabber extends WP_Widget {

  function WPZOOM_Widget_Tabber() {
    $widget_ops = array( 'classname' => 'tabbertabs', 'description' => __('Drag me to the Sidebar', 'wpzoom') );
    $control_ops = array( 'width' => 230, 'height' => 300, 'id_base' => 'wpzoom-tabber' );
    $this->WP_Widget( 'wpzoom-tabber', __('WPZOOM: Tabs', 'wpzoom'), $widget_ops, $control_ops );
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

function wpzoom_fix_widgets($content) {

  $title = $content;

  if (!$title)
  {
    $content = '<div class="empty"></div>';
  }

    return $content;
}