<?php
/*
* Title                   : Thumbnail Scroller (WP NextGEN Gallery Template)
* Version                 : 1.3
* File                    : gallery-dop-thumbnail-scroller.js
* File Version            : 1.2
* Created / Last Modified : 05 May 2013
* Author                  : Dot on Paper
* Copyright               : © 2012 Dot on Paper
* Website                 : http://www.dotonpaper.net
* Description             : NextGen Gallery Template.
*/

    if (!defined ('ABSPATH')) die ('No direct access allowed'); 
    
    // Register Styles.
    wp_enqueue_style('DOPNGTS_JScrollPaneStyle', get_template_directory_uri().'/nggallery/libraries/gui/css/jquery.jscrollpane.css');
    wp_enqueue_style('DOPNGTS_NextGENThumbnailScrollerStyle', get_template_directory_uri().'/nggallery/assets/gui/css/jquery.dop.NextGENThumbnailScroller.css');
    // Register JavaScript.
    wp_enqueue_script('jquery-ui', '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js', array('jquery'), '1.10.3');
    wp_enqueue_script('DOPNGTS_MouseWheelJS', get_template_directory_uri().'/nggallery/libraries/js/jquery.mousewheel.js', array('jquery'));
    wp_enqueue_script('DOPNGTS_JScrollPaneJS', get_template_directory_uri().'/nggallery/libraries/js/jquery.jscrollpane.min.js', array('jquery'));
    wp_enqueue_script('DOPNGTS_NextGENThumbnailScrollerJS', get_template_directory_uri().'/nggallery/assets/js/jquery.dop.NextGENThumbnailScroller.js', array('jquery'));
    
    // Enqueue Styles.
    //wp_enqueue_style('DOPNGTS_JScrollPaneStyle');
    //wp_enqueue_style('DOPNGTS_NextGENThumbnailScrollerStyle');
   
    // Enqueue JavaScript.
    if (!wp_script_is('jquery', 'queue')){
        wp_enqueue_script('jquery');
    }
    
    if (!wp_script_is('jquery-ui-draggable', 'queue')){
//        wp_enqueue_script('jquery-ui-draggable');
    }
                
    if (!wp_script_is('jquery-effects-core', 'queue')){
//        wp_enqueue_script('jquery-effects-core');
    }
//    wp_enqueue_script('DOPNGTS_MouseWheelJS');
//    wp_enqueue_script('DOPNGTS_JScrollPaneJS');
//    wp_enqueue_script('DOPNGTS_NextGENThumbnailScrollerJS');
        
    if ( !empty ($gallery) ) {
    
      $scriptData['scrollerContent'] = array();
    
      foreach ($images as $image) {
      
        $filename = explode('.', $image->filename);
      
        $scriptData['scrollerContent'][] = array (       
          "Image" => $image->imageURL,
          "Thumb" => $image->thumbURL,
          "Title" => ($image->alttext == $filename[0] || $image->alttext == ' ' ? '':preg_replace('`\'`', "&#39;", $image->alttext)),
          "Caption" => ($image->description == ' ' ? '':preg_replace('`\'`', "&#39;", preg_replace('`[\r\n]`', "<br />", html_entity_decode(stripslashes($image->description))))),
          "Media" => preg_replace('`[\r\n]`', "", stripslashes($image->ngg_custom_fields['Media'])),
          "LightboxMedia" => preg_replace('`[\r\n]`', "", stripslashes($image->ngg_custom_fields['LightboxMedia'])),
          "Link" => stripslashes($image->ngg_custom_fields['Link']),
          "Target" => stripslashes($image->ngg_custom_fields['LinkTarget']),   
        );
           
      }
    
      $scriptData['url'] = get_template_directory_uri();
      wp_register_script('DOPNGTS_Gallery', get_template_directory_uri().'/nggallery/dopts-gallery.js', array('jquery'));
      wp_localize_script('DOPNGTS_Gallery','data',$scriptData);
      wp_enqueue_script('DOPNGTS_Gallery');
?>
<div class="DOPNextGENThumbnailScroller" id="DOPNextGENThumbnailScroller">
<?php
        foreach ($images as $image):
            echo '<img src="'.$image->imageURL.'" alt="'.($image->alttext == ' ' ? '':preg_replace('`\'`', "&#39;", $image->alttext)).'" title="'.($image->alttext == ' ' ? '':preg_replace('`\'`', "&#39;", $image->alttext)).'" width="'.$image->meta_data['width'].'" height="'.$image->meta_data['height'].'" style="display: none;" />';
        endforeach;
?>
</div>
<?php
    }
?>
