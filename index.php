<link rel="stylesheet" href="<?php echo plugin_dir_url( __DIR__ );?>Maps/css/main.css">

<div class="container-map-filter">
	<div class="col-form-filter-map">
		<form action="<?= get_site_url() ?>/wp-admin/admin-ajax.php" method="POST" id="filterForm">
			<div id="containerFormMap">
				<input
					type="search"
					name="code_postal"
					placeholder="Recherche par code postal..."
					id="fieldFilter"
					required
				/>

				<input
					type="hidden"
					name="action"
					value="myfilter"
				/>

				<button
					type="submit"
					id="btnFilter"
				>
					<em class="fas fa-search"></em>
				</button>
			</div>
		</form>

		<div id="containerResult">
			<div class="cardResult" id="cardResult">
			</div>
		</div>
	</div>
	<div class="col-carte-map-filter">
		<div id="map"></div>
	</div>
</div>

<?php
	define('GOOGLE_API_KEY', '')
?>

<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> -->
<script src="<?= get_templ ?>./scrip"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=<?= GOOGLE_API_KEY ?>&callback=initMap&libraries=&v=weekly" async></script>
<script src="<?php echo plugin_dir_url( __DIR__ );?>Maps/js/maps.js"></script>
<script src="<?php echo plugin_dir_url( __DIR__ );?>Maps/js/main.js"></script>