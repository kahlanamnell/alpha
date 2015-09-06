<?php

/* You can add custom functions below, in the empty area
  =========================================================== */

/*
class Walker_Nav_Menu_Costum extends Walker_Nav_Menu {

    static $x = 0;

    function end_el(&$output, $item, $depth = 0, $args = array()) {
        if (1 == $depth) {
            self::$x++;
        } else {
            self::$x = 0;
        }


        $output .= "</li>\n";

        if (self::$x == 8) {
            $output .= "</ul>\n<ul class=\"sub-menu column-2\">\n";
        }
    }

}
*/

function SearchFilter($query) {


    if ($query->is_search && !is_admin()) {
        $query->set('post_type', array( 'post', 'coupon', 'page' ));
        $query->set('meta_query', array(
                                      'relation' => 'OR',
                                      array(
                                        'key' => 'clpr_expire_date',
                                        'compare' => 'NOT EXISTS', // works!
                                        'value' => '' // This is ignored, but is necessary...
                                      ),
                                      array(
                                        'key' => 'clpr_expire_date',
                                        'value' => strftime("%Y/%m/%d",time()),
                                        'compare' => '>=',
                                        'type' => 'DATE'
                                      )
                                    ));    
    }
    return $query;
}

add_filter('pre_get_posts', 'SearchFilter');

function custom_excerpt($text) {  // custom 'read more' link
   if (!strpos($text, __('Read More', 'wpzoom'))) {
      $text = '<p>' . strip_tags($text) . '<a class="more-link" href="'. get_permalink($post->ID) . '">[Mehr...]</a></p>';
   }
   return $text;
}
add_filter('the_excerpt', 'custom_excerpt');


//gravatar alt tag
function replace_content($text)
{
  $alt = get_comment_author($id_or_email);
  $text = str_replace('alt=\'\'', 'alt=\''.$alt.'\'',$text);
  return $text;
}
add_filter('get_avatar','replace_content');

// Create the function to use in the action hook
function custom_remove_dashboard_widget() {
 	remove_meta_box( 'dashboard_wpzoom', 'dashboard', 'normal' );
	remove_meta_box( 'jwl_tinymce_dashboard_widget', 'dashboard', 'normal' );
	remove_meta_box( 'wp-piwik_stats-dashboard-overview', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );
} 
 
// Hook into the 'wp_dashboard_setup' action to register our function
add_action('wp_dashboard_setup', 'custom_remove_dashboard_widget' );


//Disable rel=”next” on home
function wpseo_disable_rel_next_home( $link ) {
  if ( is_home() ) {
    return false;
  }
}
add_filter( 'wpseo_next_rel_link', 'wpseo_disable_rel_next_home' );

// Remove the trailing slash from the canonical URL on home
function remove_canonical_trailing_slash($url) {
	if (is_home()) {
		return untrailingslashit($url);
	} else {
		return $url;
	}
}
add_filter('wpseo_canonical','remove_canonical_trailing_slash',10,1);

function kb_svg ( $svg_mime ){
	$svg_mime['svg'] = 'image/svg+xml';
	return $svg_mime;
}

add_filter( 'upload_mimes', 'kb_svg' );

function add_nofollow_to_reply_link( $link ) {
    return str_replace( '")\'>', '")\' rel=\'nofollow\'>', $link );
}

add_filter( 'comment_reply_link', 'add_nofollow_to_reply_link' );

//Papierkorb leeren verhindern
function my_remove_schedule_delete() {
    remove_action( 'wp_scheduled_delete', 'wp_scheduled_delete' );
}
add_action( 'init', 'my_remove_schedule_delete' );


//Admin Menü aufräumen
function reorder_admin_menu() {
	global $menu, $submenu;
	
	//echo '<pre>'.print_r($submenu, true).'</pre>';

	$to_move = array();
	
	$to_move['tools.php'] = array(
		'mappress'
	);
	

	foreach ($menu as $priority=>$item) {
		foreach ($to_move as $to_where=>$pages) {
			if (in_array($item[2], $pages)) {
				$submenu[$to_where][$priority] = $item;

				unset($menu[$priority]);
				break;
			}
		}
	}
	
}
add_action('admin_menu', 'reorder_admin_menu');

function remove_style_id($link) {
        return preg_replace("/id='.*-css'/", "", $link);
}
add_filter('style_loader_tag', 'remove_style_id');


function jquery_cookie() {
    wp_register_script( 'jquery-cookie', get_template_directory_uri() . '/js/jquery.cookie-1.4.1.min.js', array( 'jquery' ) );
    wp_enqueue_script( 'jquery-cookie' );
}
add_action( 'init', 'jquery_cookie' );

/*
if (class_exists("C_Photocrati_Cache")) {
  C_Photocrati_Cache::$do_not_lookup = TRUE;
  C_Photocrati_Cache::$force_update = TRUE;
}
*/

add_action( 'init', 'my_add_excerpts_to_pages' );
function my_add_excerpts_to_pages() {
     add_post_type_support( 'page', 'excerpt' );
}

//filter image links
add_filter( 'the_content', 'attachment_image_link_remove_filter' );
function attachment_image_link_remove_filter( $content ) {
 $content = preg_replace( array('{<a(.*?)(wp-att|assets|wp-content\/uploads)[^>]*><img}', '{ wp-image-[0-9]*" /></a>}'), array('<img','" />'), $content );
 return $content;
}


/*  Don't add any code below here or the sky will fall down
  =========================================================== */
?>
