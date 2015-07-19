<?php return array(

/* Theme Admin Menu */
"menu" => array(
    array("id"    => "1",
          "name"  => "General"),

    array("id"    => "2",
          "name"  => "Homepage"),

		array("id"    => "5",
					"name"  => "Styling"),

  	array("id"    => "7",
          "name"  => "Banners"),
),

/* Theme Admin Options */
"id1" => array(
    array("type"  => "preheader",
          "name"  => "Theme Settings"),

    array("name"  => "Color Style",
          "desc"  => "Choose the style that you would like to use.<br />",
          "id"    => "theme_style",
          "options" => array('Default', 'Newspaper'),
          "std"   => "Default",
          "type"  => "select"),

	array("name"  => "Logo Image",
          "desc"  => "Upload a custom logo image for your site, or you can specify an image URL directly.",
          "id"    => "misc_logo_path",
          "std"   => "",
          "type"  => "upload"),

    array("name"  => "Favicon URL",
          "desc"  => "Upload a favicon image (16&times;16px).",
          "id"    => "misc_favicon",
          "std"   => "",
          "type"  => "upload"),

    array("name"  => "Custom Feed URL",
          "desc"  => "Example: <strong>http://feeds.feedburner.com/wpzoom</strong>",
          "id"    => "misc_feedburner",
          "std"   => "",
          "type"  => "text"),

	array("name"  => "Enable comments on static pages",
          "id"    => "comments_page",
          "std"   => "off",
          "type"  => "checkbox"),

    array("name"  => "Sidebar Position",
          "desc"  => "Select default position for the sidebar.",
          "id"    => "sidebar_pos",
          "options" => array('Right', 'Left'),
          "std"   => "Right",
          "type"  => "select"),


    array("type"  => "preheader",
          "name"  => "Navigation Bar"),

    array("name"  => "Display Search Bar?",
          "id"    => "search_form",
          "std"   => "on",
          "type"  => "checkbox"),

    array("type" => "startsub",
          "name" => "Breaking News Bar"),

        array("name"  => "Display Breaking News Bar?",
              "desc"  => "Edit posts which you want to display here, and check the option from editing page: <strong>Add to Breaking News Bar</strong> ",
               "id"    => "breaking_on",
              "std"   => "on",
              "type"  => "checkbox"),

        array("name"  => "Number of Posts",
              "desc"  => "Default: <strong>5</strong> (posts).",
              "id"    => "breaking_number",
              "std"   => "5",
              "type"  => "text"),

    array("type"  => "endsub"),


    array("type" => "preheader",
      "name" => "Top Featured Posts"),

    array("name"  => "Display 4 Featured Categories on the Top?",
              "id"    => "featured_top_display",
              "std"   => "on",
              "type"  => "checkbox"),

    array("name" => "Category for Featured Posts 1",
            "desc" => "Select the category which should be featured as #1 in the Header.",
            "id" => "featured_category_1",
            "std" => "",
            "type" => "select-category"),

    array("name" => "Category for Featured Posts 2",
            "desc" => "Select the category which should be featured as #2 in the Header.",
            "id" => "featured_category_2",
            "std" => "",
            "type" => "select-category"),

    array("name" => "Category for Featured Posts 3",
            "desc" => "Select the category which should be featured as #3 in the Header.",
            "id" => "featured_category_3",
            "std" => "",
            "type" => "select-category"),

    array("name" => "Category for Featured Posts 4",
            "desc" => "Select the category which should be featured as #4 in the Header.",
            "id" => "featured_category_4",
            "std" => "",
            "type" => "select-category"),


 	array("type"  => "preheader",
          "name"  => "Global Posts Options"),

    array("name"  => "Content",
          "desc"  => "Number of posts displayed on homepage can be changed <a href=\"options-reading.php\" target=\"_blank\">here</a>.",
          "id"    => "display_content",
          "options" => array('Excerpt', 'Full Content', 'None'),
          "std"   => "Excerpt",
          "type"  => "select"),

    array("name"  => "Excerpt Length",
          "desc"  => "Default: <strong>60</strong> (words)",
          "id"    => "excerpt_length",
          "std"   => "60",
          "type"  => "text"),

    array("type" => "startsub",
            "name" => "Thumbnails"),

        array("name"  => "Display thumbnail",
              "id"    => "index_thumb",
              "std"   => "on",
              "type"  => "checkbox"),

        array("name"  => "Thumbnail Width (in pixels)",
              "desc"  => "Default: <strong>200</strong> (pixels). <br/>Use this option only when <strong>List view</strong> is active.",
              "id"    => "thumb_width",
              "std"   => "200",
              "type"  => "text"),

        array("name"  => "Thumbnail Height (in pixels)",
              "desc"  => "Default: <strong>150</strong> (pixels)",
              "id"    => "thumb_height",
              "std"   => "150",
              "type"  => "text"),

    array("type"  => "endsub"),

    array("name"  => "Display Category",
          "id"    => "display_category",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Display Author",
          "id"    => "display_author",
          "std"   => "on",
          "type"  => "checkbox"),


    array("name"  => "Display Date/Time",
          "desc"  => "<strong>Date/Time format</strong> can be changed <a href='options-general.php' target='_blank'>here</a>.",
          "id"    => "display_date",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Display Comments Count",
          "id"    => "display_comments",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Display Read More button",
          "id"    => "display_readmore",
          "std"   => "on",
          "type"  => "checkbox"),


 	array("type"  => "preheader",
          "name"  => "Single Post Options"),

    array("name"  => "Display Category",
          "id"    => "post_category",
          "std"   => "on",
          "type"  => "checkbox"),

	array("name"  => "Display Date/Time",
          "desc"  => "<strong>Date/Time format</strong> can be changed <a href='options-general.php' target='_blank'>here</a>.",
          "id"    => "post_date",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Display Author",
          "desc"  => "You can edit your profile on this <a href='profile.php' target='_blank'>page</a>.",
          "id"    => "post_author",
          "std"   => "on",
          "type"  => "checkbox"),

   array("name"  => "Display Author Box",
          "id"    => "post_authorbio",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Display Tags",
          "id"    => "post_tags",
          "std"   => "on",
          "type"  => "checkbox"),

	array("name"  => "Display Share Buttons",
          "id"    => "post_share",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name" => "Display Comments",
          "id"    => "post_comments",
          "std"   => "on",
          "type"  => "checkbox"),
),

"id2" => array(
    array("type"  => "preheader",
          "name"  => "Featured Slider"),

  array("name"  => "Enable the Featured Slider",
          "desc"  => "Edit posts which you want to feature, and check the option from editing page: <strong>Feature in Homepage Slider</strong> ",
          "id"    => "featured_enable",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Number of Featured Posts",
          "desc"  => "Default: 5",
          "id"    => "featured_number",
          "std"   => "5",
          "type"  => "text"),


  array("name"  => "Autoplay Slider",
          "desc"  => "Should the slider start rotating automatically?",
          "id"    => "featured_rotate",
          "std"   => "off",
          "type"  => "checkbox"),

  array("name"  => "Autoplay Interval",
          "desc"  => "Select the interval (in miliseconds) at which the slider should change posts (if autoplay is enabled). Default: 3000 (3 seconds).",
          "id"    => "featured_interval",
          "std"   => "3000",
          "type"  => "text"),

    array("name"  => "Display Date",
          "id"    => "featured_date",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Display Comments",
          "id"    => "featured_comments",
          "std"   => "on",
          "type"  => "checkbox"),



	array("type"  => "preheader",
          "name"  => "Recent Posts"),

	array("name"  => "Display Recent Posts on Homepage",
          "id"    => "recent_posts",
          "std"   => "on",
          "type"  => "checkbox"),

  	array("name"  => "Title for Recent Posts",
          "desc"  => "Default: <em>Other News</em>",
          "id"    => "recent_title",
          "std"   => "Other News",
          "type"  => "text"),

	array("name"  => "Exclude categories",
          "desc"  => "Choose the categories which should be excluded from the main Loop on the homepage.<br/><em>Press CTRL or CMD key to select/deselect multiple categories </em>",
          "id"    => "recent_part_exclude",
          "std"   => "",
          "type"  => "select-category-multi"),

	array("name"  => "Hide Featured Posts in Recent Posts?",
          "desc"  => "You can use this option if you want to hide posts which are featured in the slider on front page.",
          "id"    => "hide_featured",
          "std"   => "on",
          "type"  => "checkbox"),
 ),

"id5" => array(
    array("type"  => "preheader",
          "name"  => "Colors"),

    array("name"  => "Background Color",
           "id"   => "bg_color",
           "type" => "color",
           "selector" => "body",
           "attr" => "background-color"),

    array("name"  => "Logo Color",
           "id"   => "logo_color",
           "type" => "color",
           "selector" => "#logo h1 a",
           "attr" => "color"),

    array("name"  => "Link Color",
           "id"   => "a_css_color",
           "type" => "color",
           "selector" => "a",
           "attr" => "color"),

    array("name"  => "Link Hover Color",
           "id"   => "ahover_css_color",
           "type" => "color",
           "selector" => "a:hover",
           "attr" => "color"),

    array("name"  => "Header Background",
           "id"   => "header_bg",
           "type" => "color",
           "selector" => "#header",
           "attr" => "background"),

    array("name"  => "Top Menu Background",
           "id"   => "menu_top_bg",
           "type" => "color",
           "selector" => "#menutop",
           "attr" => "background"),

    array("name"  => "Main Menu Background",
           "id"   => "menu_main_bg",
           "type" => "color",
           "selector" => "#menu",
           "attr" => "background"),

    array("name"  => "Breaking News Bar Background",
           "id"   => "breaking_bg",
           "type" => "color",
           "selector" => "#news-ticker",
           "attr" => "background"),

    array("name"  => "Content Area Background",
           "id"   => "container_bg",
           "type" => "color",
           "selector" => ".container",
           "attr" => "background"),

    array("name"  => "Featured Slider Navigation Background",
           "id"   => "slider_nav_bg",
           "type" => "color",
           "selector" => ".flex-control-nav",
           "attr" => "background"),

    array("name"  => "Widget Title Color",
           "id"   => "widget_color",
           "type" => "color",
           "selector" => ".widget h3.title",
           "attr" => "color"),

    array("type"  => "preheader",
          "name"  => "Fonts"),

    array("name" => "General Text Font Style",
          "id" => "typo_body",
          "type" => "typography",
          "selector" => "body" ),

    array("name" => "Logo Text Style",
          "id" => "typo_logo",
          "type" => "typography",
          "selector" => "#logo h1 a" ),

    array("name"  => "Featured Slider Post Title Style",
           "id"   => "typo_slider_title",
           "type" => "typography",
           "selector" => "#slider #slidemain .slide_content h2"),

    array("name"  => "Featured Category Title Style",
           "id"   => "typo_featcat_title",
           "type" => "typography",
           "selector" => ".left-col h2, .right-col h4"),

    array("name"  => "Post Title Style",
           "id"   => "typo_post_title",
           "type" => "typography",
           "selector" => ".archiveposts h2"),

    array("name"  => "Individual Post Title Style",
           "id"   => "typo_individual_title",
           "type" => "typography",
           "selector" => "h1.title"),

     array("name"  => "Widget Title Style",
           "id"   => "typo_widget",
           "type" => "typography",
           "selector" => ".widget h3.title"),

),

"id7" => array(
    array("type"  => "preheader",
          "name"  => "Header Ad"),

    array("name"  => "Enable ad space in the header?",
          "id"    => "ad_head_select",
          "std"   => "off",
          "type"  => "checkbox"),

    array("name"  => "HTML Code (Adsense)",
          "desc"  => "Enter complete HTML code for your banner (or Adsense code) or upload an image below.",
          "id"    => "ad_head_code",
          "std"   => "",
          "type"  => "textarea"),

    array("name"  => "Upload your image",
          "desc"  => "Upload a banner image or enter the URL of an existing image.<br/>Recommended size: <strong>728 × 90px</strong>",
          "id"    => "banner_top",
          "std"   => "",
          "type"  => "upload"),

    array("name"  => "Destination URL",
          "desc"  => "Enter the URL where this banner ad points to.",
          "id"    => "banner_top_url",
          "type"  => "text"),

    array("name"  => "Banner Title",
          "desc"  => "Enter the title for this banner which will be used for ALT tag.",
          "id"    => "banner_top_alt",
          "type"  => "text"),


    array("type"  => "preheader",
          "name"  => "Homepage Top Ad"),

    array("name"  => "Enable ad space at the top on homepage?",
          "id"    => "ad_top_select",
          "std"   => "off",
          "type"  => "checkbox"),

    array("name"  => "HTML Code (Adsense)",
          "desc"  => "Enter complete HTML code for your banner (or Adsense code) or upload an image below.",
          "id"    => "ad_top_code",
          "std"   => "",
          "type"  => "textarea"),

    array("name"  => "Upload your image",
          "desc"  => "Upload a banner image or enter the URL of an existing image.<br/>Recommended size: <strong>728 × 90px</strong>",
          "id"    => "banner_top_home",
          "std"   => "",
          "type"  => "upload"),

    array("name"  => "Destination URL",
          "desc"  => "Enter the URL where this banner ad points to.",
          "id"    => "banner_top_home_url",
          "type"  => "text"),

    array("name"  => "Banner Title",
          "desc"  => "Enter the title for this banner which will be used for ALT tag.",
          "id"    => "banner_top_home_alt",
          "type"  => "text"),


     array("type"  => "preheader",
          "name"  => "Homepage Slider Ad"),

    array("name"  => "Enable ad space below the featured slider?",
          "id"    => "ad_slider_select",
          "std"   => "off",
          "type"  => "checkbox"),

    array("name"  => "HTML Code (Adsense)",
          "desc"  => "Enter complete HTML code for your banner (or Adsense code) or upload an image below.",
          "id"    => "ad_slider_code",
          "std"   => "",
          "type"  => "textarea"),

    array("name"  => "Upload your image",
          "desc"  => "Upload a banner image or enter the URL of an existing image.<br/>Recommended size: <strong>728 × 90px</strong>",
          "id"    => "banner_slider_home",
          "std"   => "",
          "type"  => "upload"),

    array("name"  => "Destination URL",
          "desc"  => "Enter the URL where this banner ad points to.",
          "id"    => "banner_slider_home_url",
          "type"  => "text"),

    array("name"  => "Banner Title",
          "desc"  => "Enter the title for this banner which will be used for ALT tag.",
          "id"    => "banner_slider_home_alt",
          "type"  => "text"),


    array("type"  => "preheader",
          "name"  => "Sidebar Ad"),

    array("name"  => "Enable ad space in sidebar?",
          "id"    => "ad_side",
          "std"   => "off",
          "type"  => "checkbox"),

    array("name"  => "Ad Position",
          "desc"  => "Do you want to place the banner before the widgets or after the widgets?",
          "id"    => "ad_side_pos",
          "options" => array('Before widgets', 'After widgets'),
          "std"   => "Before widgets",
          "type"  => "select"),

    array("name"  => "HTML Code (Adsense)",
          "desc"  => "Enter complete HTML code for your banner (or Adsense code) or upload an image below.",
          "id"    => "ad_side_imgpath",
          "std"   => "",
          "type"  => "textarea"),

    array("name"  => "Upload your image",
          "desc"  => "Upload a banner image or enter the URL of an existing image.<br/>Recommended size: <strong>300 × 300px</strong>",
          "id"    => "banner_sidebar",
          "std"   => "",
          "type"  => "upload"),

    array("name"  => "Destination URL",
          "desc"  => "Enter the URL where this banner ad points to.",
          "id"    => "banner_sidebar_url",
          "type"  => "text"),

    array("name"  => "Banner Title",
          "desc"  => "Enter the title for this banner which will be used for ALT tag.",
          "id"    => "banner_sidebar_alt",
          "type"  => "text"),


    array("type"  => "preheader",
          "name"  => "Left Sidebar Ad"),

  array("name"  => "Enable ad space in the left sidebar?",
          "id"    => "banner_sidebarleft_enable",
          "std"   => "off",
          "type"  => "checkbox"),

  array("name"  => "Ad Position",
          "desc"  => "Do you want to place the banner before the widgets or after the widgets?",
          "id"    => "banner_sidebarleft_position",
          "options" => array('Before widgets', 'After widgets'),
          "std"   => "Before widgets",
          "type"  => "select"),

    array("name"  => "HTML Code (Adsense)",
          "desc"  => "Enter complete HTML code for your banner (or Adsense code) or upload an image below.",
          "id"    => "banner_sidebarleft_html",
          "std"   => "",
          "type"  => "textarea"),

  array("name"  => "Upload your image",
          "desc"  => "Upload a banner image or enter the URL of an existing image.<br/>Recommended size: <strong>160 × 600px</strong>",
          "id"    => "banner_sidebarleft",
          "std"   => "",
          "type"  => "upload"),

  array("name"  => "Destination URL",
          "desc"  => "Enter the URL where this banner ad points to.",
          "id"    => "banner_sidebarleft_url",
          "type"  => "text"),

  array("name"  => "Banner Title",
          "desc"  => "Enter the title for this banner which will be used for ALT tag.",
          "id"    => "banner_sidebarleft_alt",
          "type"  => "text"),

)


/* end return */);