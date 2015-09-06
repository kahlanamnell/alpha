<?php

/*------------------------------------------*/
/* WPZOOM: Featured Category widget			*/
/*------------------------------------------*/


$wpzoomColors = array();
$wpzoomColors['blue'] = 'Blue';
$wpzoomColors['green'] = 'Green';
$wpzoomColors['pink'] = 'Pink';
$wpzoomColors['black'] = 'Black';


class wpzoom_widget_category extends WP_Widget {

	/* Widget setup. */
	function wpzoom_widget_category() {
		/* Widget settings. */
		$widget_ops = array( 'classname' => 'wpzoom', 'description' => __('Featured Category Widget for Homepage', 'wpzoom') );

		/* Widget control settings. */
		$control_ops = array( 'width' => 250, 'height' => 350, 'id_base' => 'wpzoom-widget-cat' );

		/* Create the widget. */
		$this->WP_Widget( 'wpzoom-widget-cat', __('WPZOOM: Featured Category', 'wpzoom'), $widget_ops, $control_ops );
	}

	/* How to display the widget on the screen. */
	function widget( $args, $instance ) {
		extract( $args );

		/* Our variables from the widget settings. */
		$title1 = apply_filters('widget_title', $instance['title1'] );
 		$color1 = $instance['color1'];
 		$posts1 = $instance['posts1'];
 		$category1 = get_category($instance['category1']);
		if ($category1) {
		$categoryLink1 = get_category_link($category1);
    }
		$exclude_featured = $instance['exclude_featured'];
		
		/* Exclude featured posts from Widget Posts */
		$postnotin = '';
		if ($exclude_featured == 'on') {
			
			$featured_posts = new WP_Query( 
				array( 
					'post__not_in' => get_option( 'sticky_posts' ),
					'posts_per_page' => -1,
					'meta_key' => 'wpzoom_is_featured',
					'meta_value' => 1				
					) );
				
			while ($featured_posts->have_posts()) {
				$featured_posts->the_post();
				global $post;
				$postIDs[] = $post->ID;
			}
			$postnotin = $postIDs;
		}

		/* Before widget (defined by themes). */
		//echo $before_widget;

  		$z = 0;
		while ($z < 1)
		{
		  $z++;

		  $color = "color$z";
		  $categoryLink = "categoryLink$z";
		  $title = "title$z";
		  $posts = "posts$z";
		  $category = $instance["category$z"];

?>
				
		<div class="featured-category">
            <?php if ( $$title ) {	echo '<h3 class="'.$$color.'"><a href="'.$$categoryLink.'">'.$$title.'</a></h3>
            '; } ?>

			<?php
            $second_query = new WP_Query( array( 'cat' => $category, 'showposts' => $$posts, 'orderby' => 'date', 'post__not_in' => $postnotin, 'order' => 'DESC' ) );

              $i = 0;
              if ( $second_query->have_posts() ) : while( $second_query->have_posts() ) : $second_query->the_post();
			  unset($image,$cropLocation);
              $i++;
              global $post;

              if ($i == 1)
              { ?>

				<div class="left-col">

					<?php get_the_image( array( 'size' => 'featured-cat', 'width' => 300, 'height' => 200 ) ); ?>
					<div class="clear"></div>

					<div class="left-col-content">

						<h2><a href="<?php the_permalink() ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>

						<div class="featured-meta">
							<span><?php echo get_the_date(); ?></span>
						</div>

						<?php the_excerpt(); ?>
					</div>

				</div>

				<div class="right-col">
					<ul>

					<?php } else { ?>

						<li>
							<?php get_the_image( array( 'size' => 'featured-cat-small', 'width' => 100, 'height' => 75 ) ); ?>

							<div class="right-col-content">
 
								<h4><a href="<?php the_permalink() ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h4>

								<div class="featured-meta">
                  <?php the_excerpt(); ?>
								</div>
  
							</div>

							<div style="clear:both;"></div>

						</li>

						<?php } ?>
						<?php endwhile; ?>
					</ul>
	              <?php
	              else :
	              echo'<p>';
	              _e('There are no posts in this category.', 'wpzoom');
	              echo'</p>';
	              endif;
	               ?>
	            </div>
				<div class="clear"></div>
		</div><!-- / .category -->
<?php

    } // while
    echo ' <!-- / .featCategory -->';
		/* After widget (defined by themes). */
		//echo $after_widget;
		wp_reset_query();
	}

	/* Update the widget settings.*/
	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;

		/* Strip tags for title and name to remove HTML (important for text inputs). */
		$instance['title1'] = strip_tags( $new_instance['title1'] );
 		$instance['category1'] = $new_instance['category1'];
		$instance['color1'] = $new_instance['color1'];
		$instance['posts1'] = $new_instance['posts1'];
		$instance['exclude_featured'] = $new_instance['exclude_featured'];

		return $instance;
	}

	/** Displays the widget settings controls on the widget panel.
	 * Make use of the get_field_id() and get_field_name() function when creating your form elements. This handles the confusing stuff. */
	function form( $instance ) {

		/* Set up some default widget settings. */
		$defaults = array( 'title1' => __('Category Name', 'wpzoom'), 'category1' => '0', 'color1' => 'blue', 'posts1' => '4', 'exclude_featured' => '' );
		$instance = wp_parse_args( (array) $instance, $defaults );
		global $wpzoomColors;
    ?>

 		<p>
			<label for="<?php echo $this->get_field_id( 'title1' ); ?>"><?php _e('Category Title:', 'wpzoom'); ?></label>
			<input  type="text" class="widefat" id="<?php echo $this->get_field_id( 'title1' ); ?>" name="<?php echo $this->get_field_name( 'title1' ); ?>" value="<?php echo $instance['title1']; ?>"   />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id('color1'); ?>"><?php _e('Title Background Color:', 'wpzoom'); ?></label>
			<select id="<?php echo $this->get_field_id('color1'); ?>" name="<?php echo $this->get_field_name('color1'); ?>" style="width:90%;">
			<?php
				foreach ($wpzoomColors as $key => $value) {
				$option = '<option value="'.$key;
				if ($key == $instance['color1']) { $option .='" selected="selected';}
				$option .= '">';
				$option .= $value;
				$option .= '</option>';
				echo $option;
				}
			?>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id('category1'); ?>"><?php _e('Category:', 'wpzoom'); ?></label>
			<select id="<?php echo $this->get_field_id('category1'); ?>" name="<?php echo $this->get_field_name('category1'); ?>" style="width:90%;">
				<option value="0">Choose category:</option>
				<?php
				$cats = get_categories('hide_empty=0');

				foreach ($cats as $cat) {
				$option = '<option value="'.$cat->term_id;
				if ($cat->term_id == $instance['category1']) { $option .='" selected="selected';}
				$option .= '">';
				$option .= $cat->cat_name;
				$option .= ' ('.$cat->category_count.')';
				$option .= '</option>';
				echo $option;
				}
			?>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id('posts1'); ?>"><?php _e('Posts to show:', 'wpzoom'); ?></label>
			<select id="<?php echo $this->get_field_id('posts1'); ?>" name="<?php echo $this->get_field_name('posts1'); ?>" style="width:90%;">
			<?php
				$m = 0;
				while ($m < 11) {
				$m++;
				$option = '<option value="'.$m;
				if ($m == $instance['posts1']) { $option .='" selected="selected';}
				$option .= '">';
				$option .= $m;
				$option .= '</option>';
				echo $option;
				}
			?>
			</select>
		</p>
		
		<p>
			<input class="checkbox" type="checkbox" id="<?php echo $this->get_field_id('exclude_featured'); ?>" name="<?php echo $this->get_field_name('exclude_featured'); ?>" <?php if ($instance['exclude_featured'] == 'on') { echo ' checked="checked"';  } ?> /> 
			<label for="<?php echo $this->get_field_id('exclude_featured'); ?>"><?php _e('Exclude Featured Posts from Widget', 'wpzoom'); ?></label>
			<br/>
		</p>

	<?php
	}
}

function wpzoom_register_category_widget() {
	register_widget('wpzoom_widget_category');
}
add_action('widgets_init', 'wpzoom_register_category_widget');
?>