<?php

/*------------------------------------------*/
/* WPZOOM: Video Widget                     */
/*------------------------------------------*/

class Wpzoom_Widget_Videos extends WP_Widget {

    function __construct() {
        $widget_ops = array(
            'classname' => 'widget_wpzoom_videos',
            'description' => __( 'Display latest posts marked with Video format.', 'wpzoom' )
        );

        $control_ops = array( 'id_base' => 'wpzoom-videos' );

        parent::__construct( 'wpzoom-videos', __( 'WPZOOM: Videos', 'wpzoom' ), $widget_ops, $control_ops );
    }

    /**
     * Outputs the HTML for this widget.
     *
     * @param array An array of standard parameters for widgets in this theme
     * @param array An array of settings for this widget instance
     * @return void Echoes it's output
     **/
    function widget( $args, $instance ) {
        global $post;

        extract( $args, EXTR_SKIP );

        wp_enqueue_script( 'frogaloop', get_template_directory_uri() . '/js/frogaloop.js', array(), wpzoom::$themeVersion, true );
        wp_enqueue_script( 'youtube-api', 'http://www.youtube.com/player_api', array(), wpzoom::$themeVersion, true );

        $title = apply_filters('widget_title', $instance['title'] );

        if ( ! isset( $instance['number'] ) )
            $instance['number'] = '5';

        if ( ! $number = absint( $instance['number'] ) )
            $number = 5;


        $videos_recent_args = array(
            'order' => 'DESC',
            'posts_per_page' => $number,
            'nopaging' => 0,
            'post_status' => 'publish',
            'post__not_in' => get_option( 'sticky_posts' ),
            'tax_query' => array(

                array(
                    'taxonomy' => 'post_format',
                    'terms' => array( 'post-format-video' ),
                    'field' => 'slug',
                    'operator' => 'IN',
                )
            )
        );
        $videos_recent = new WP_Query();
        $videos_recent->query( $videos_recent_args );

        // If there aren't any videos at all, bail.
        if ( ! $videos_recent->have_posts() )
            return false;

        echo $before_widget;

        /* Title of widget (before and after defined by themes). */
        if ( $title )
            echo $before_title . $title;

            ?>
            <a href="<?php echo get_post_format_link( 'video' ); ?>" class="see-all"><?php _e( 'See All &raquo;', 'wpzoom' ); ?></a>

            <?php

            echo $after_title;
        ?>


        <div id="recent-videos" class="flexslider">

            <?php if ( $videos_recent->have_posts() ) : ?>

                    <ul class="slides">

                        <?php
                            while ( $videos_recent->have_posts() ) : $videos_recent->the_post();

                            $videocode = get_post_meta($post->ID, 'wpzoom_post_embed_code', true);
                        ?>
                            <li><?php if ( strlen($videocode) > 1 ) {
                                    echo '<div class="post-video">' . embed_fix( $videocode, 300, 170 ) . '</div>';
                                }

                                else {

                                    get_the_image( array( 'size' => 'video-widget',  'width' => 300, 'height' => 170,  'before' => '<div class="post-thumb">', 'after' => '</div>' ) );
                                }
                                ?>

                                <h4><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php printf( __( 'Permanent Link to %s', 'wpzoom' ), get_the_title() ); ?>"><?php the_title(); ?></a></h4>

                            </li>
                        <?php endwhile; ?>

                    </ul>


            <?php endif; ?>


        </div>

<?php
        echo $after_widget;
    }

    /**
     * Deals with the settings when they are saved by the admin. Here is
     * where any validation should be dealt with.
     **/
    function update($new_instance, $old_instance) {
        $instance = $old_instance;

        $instance[ 'title' ] = $new_instance[ 'title' ];
        $instance[ 'number' ] = (int) $new_instance[ 'number' ];

        return $instance;
    }

    /**
     * Displays the form for this widget on the Widgets page of the WP Admin area.
     **/
    function form($instance) {
        $title = $instance[ 'title' ] ;
        $number = isset( $instance[ 'number' ] ) ? absint( $instance[ 'number' ] ) : 3;
?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php _e( 'Title:', 'wpzoom' ); ?></label>
                <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
            </p>

            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'number' ) ); ?>"><?php _e( 'Number of videos to show:', 'wpzoom' ); ?></label>
                <input id="<?php echo esc_attr( $this->get_field_id( 'number' ) ); ?>" name="<?php echo  esc_attr( $this->get_field_name( 'number' ) ); ?>" value="<?php echo  esc_attr( $number ); ?>" size="3" type="text">
            </p>
<?php
    }
}

add_action( 'widgets_init', create_function( '', "register_widget( 'Wpzoom_Widget_Videos' );" ) );