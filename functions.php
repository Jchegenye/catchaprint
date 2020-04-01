<?php
/**
 * @Author Jackson A. Chegenye
 * @AuthorURL https://github.com/Jchegenye
 * */

// Including the Gutenberg Block Editor styles in the SASS build
// remove default guttenberg block editor stylesheet
//  https://wpassist.me/how-to-remove-block-library-css-from-wordpress/
function wpassist_remove_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
}
add_action( 'wp_enqueue_scripts', 'wpassist_remove_block_library_css' );

// Load scripts
function load_vue_scripts() {

    // register webpack stylesheet and js with theme
    wp_enqueue_style( 'site_main_css', get_template_directory_uri() . '/build/css/baraka.min.css' );
    wp_enqueue_script( 'site_main_js', get_template_directory_uri() . '/build/js/baraka.min.js' , null , null , true );
    
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );


/**
 * Custom Functions.
 */
require get_template_directory() . '/inc/custom-functions.php';

/**
 * Custom EndPoints
 */
require get_template_directory() . '/inc/api-endpoints.php';

/**
 * Custom Theme Settings
 */
require get_template_directory() . '/inc/theme-settings.php';