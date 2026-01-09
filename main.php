<?php

/**
 * Plugin Name: hydration_solution_react
 * Plugin URI:  https://example.com/roop
 * Description: A modern coaching plugin template for WordPress.
 * Version:     1.0.0
 * Author:      Mikel
 * Author URI:  https://example.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: hydration_solution_react
 * Domain Path: /languages
 */


add_action('wp_enqueue_scripts', function () {

    if (is_page('home')) {

        // React 18 and ReactDOM from CDN
        wp_enqueue_script(
            'react',
            'https://unpkg.com/react@18/umd/react.production.min.js',
            array(),
            '18.2.0',
            true
        );

        wp_enqueue_script(
            'react-dom',
            'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
            array('react'),
            '18.2.0',
            true
        );

        // Your Vite-built app
        wp_enqueue_script(
            'myplugin-script',
            plugin_dir_url(__FILE__) . '/wp-build/index.js',
            array('react', 'react-dom'), // Dependencies
            '1.0.0',
            true
        );

        // Tailwind CSS output
        // wp_enqueue_style(
        //     'myplugin-style',
        //     plugin_dir_url(__FILE__) . '/build/assets/index.css',
        //     array(),
        //     '1.0.0'
        // );
    }
});


add_filter('template_include', function ($template) {
    if (is_page('home')) {
        return plugin_dir_path(__FILE__) . 'home.php';
    } else {
        return $template;
    }
});
