<?php

/**
 * Plugin Name: Roop
 * Plugin URI:  https://example.com/roop
 * Description: A modern coaching plugin template for WordPress.
 * Version:     1.0.0
 * Author:      Mikel
 * Author URI:  https://example.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: roop
 * Domain Path: /languages
 */


add_action('wp_enqueue_scripts', function () {

    if (is_page('home')) {

        wp_enqueue_script(
            'myplugin-script',                 // Handle
            plugin_dir_url(__FILE__) . '/build/index.js', // File URL
            array('jquery'),                   // Dependencies (e.g., jQuery)
            '1.0.0',                           // Version
            true                               // Load in footer (true) or header (false)
        );

        wp_enqueue_style(
            'myplugin-style',                  // Handle (unique name)
            plugin_dir_url(__FILE__) . '/build/index.css', // File URL
            array(),                           // Dependencies (array of handles)
            '1.0.0'                            // Version
        );
    }
});


add_filter('template_include', function ($template) {
    if (is_page('home')) {
        return plugin_dir_path(__FILE__) . 'home.php';
    } else {
        return $template;
    }
});
