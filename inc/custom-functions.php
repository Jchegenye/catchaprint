<?php
/**
 *  Author: Jackson CHEGENYE
 * 
 * */

    /**
    * Display Custom Logo
    */
    add_theme_support( 'custom-logo' );
    function baraka_custom_logo_setup() {
        $defaults = array(
        // 'height'      => 100,
        // 'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
        );
        add_theme_support( 'custom-logo', $defaults );
    }
    add_action( 'after_setup_theme', 'baraka_custom_logo_setup' );   


    /**
    * Display Custom Menu
    */
    function display_menus() {
        register_nav_menus( array( 
            'header' => 'Header menu', 
            'footer' => 'Footer menu',
        ));
    }
    add_action( 'after_setup_theme', 'display_menus' );

    /*
        * Enable support for Post Thumbnails on posts and pages.
        *
        * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
        */
    add_theme_support( 'post-thumbnails' );


    // Enable the option show in rest
    add_filter( 'acf/rest_api/field_settings/show_in_rest', '__return_true' );

    // Enable the option edit in rest
    add_filter( 'acf/rest_api/field_settings/edit_in_rest', '__return_true' );