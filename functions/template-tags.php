<?php
/**
 * Custom template tags.
 */



/* Comments Custom Template
==================================== */
if ( ! function_exists( 'alpha_comment' ) ) :
	function alpha_comment( $comment, $args, $depth ) {
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
endif;



/* Video Embed Code Fix
==================================== */
if ( !function_exists( 'embed_fix' ) ) {
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

}



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
