<?php
namespace Map_Card_Filterable;

use Elementor\Repeater;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

//include plugin_dir_path( __FILE__ ) . '/vue_map.php';

class Map_Card_Filterable extends Widget_Base {

	public static $slug = 'map_card_filterable';

	public function get_name() { return self::$slug; }

	public function get_title() { return __('Map Card Filterable', self::$slug); }

	public function get_icon() { return 'fas fa-map-marked-alt'; }

	public function get_categories() { return [ 'general' ]; }

	protected function _register_controls() {
		
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		include plugin_dir_path( __FILE__ ) . '/index.php';
	}
}