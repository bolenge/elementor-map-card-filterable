<?php
/**
 * Plugin Name: Map Card Filterable
 * Description: Plugin for add Google Map Card with filter
 * Plugin URI:  https://github.com/bolenge/elementor-map-card-filterable
 * Version:     1.0.0
 * Author:      Don de Dieu Bolenge
 * Author URI:  https://github.com/bolenge
 * Text Domain: map-card-filterable
 */
namespace Map_Card_Filterable;
use Elementor\Plugin;
//include(dirname(__FILE__)."/assets.php");

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

// The Widget_Base class is not available immediately after plugins are loaded, so
// we delay the class' use until Elementor widgets are registered
add_action( 'elementor/widgets/widgets_registered', function() {
	require_once('widget.php');

	$map_card_filterable =	new Map_Card_Filterable();

	// Let Elementor know about our widget
	Plugin::instance()->widgets_manager->register_widget_type($map_card_filterable);
});

