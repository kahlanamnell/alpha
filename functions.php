<?php
/**
 * WPZOOM Theme Functions
 *
 * Don't edit this file until you know what you're doing. If you mind to add
 * functions and other hacks please use functions/user/ folder instead and
 * functions/user/functions.php file, those files are intend for that and
 * will never be overwritten in case of a framework update.
 */

/**
 * Paths to WPZOOM Theme Functions
 */
define("FUNC_INC", get_template_directory() . "/functions");
define("WPZOOM_INC", FUNC_INC . "/wpzoom");

/** WPZOOM Framework Core */
require_once WPZOOM_INC . "/init.php";

/** WPZOOM Theme */
require_once FUNC_INC . "/functions.php";
require_once FUNC_INC . "/post-options.php";
require_once FUNC_INC . "/template-tags.php";
require_once FUNC_INC . "/sidebar.php";

/* Theme widgets */
require_once FUNC_INC . "/widgets/recentposts.php";
require_once FUNC_INC . "/widgets/recentcomments.php";
require_once FUNC_INC . "/widgets/featured-category.php";
require_once FUNC_INC . "/widgets/popularnews.php";
require_once FUNC_INC . "/widgets/video.php";