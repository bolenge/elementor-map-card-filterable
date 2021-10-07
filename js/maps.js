/**
 * @param {Object} map
 * @param {Object} cordinate
 * @return {Object}
 */ 
function getInfoWindowAndMarkerMap(map, cordinate) {
	const marker = new google.maps.Marker({
        position: {
        	lat:parseFloat(cordinate.latitude), 
        	lng:parseFloat(cordinate.longitude)
      	},
      	map: map
     });

    const infowindow = new google.maps.InfoWindow({
      	content: `
	        <div class="info-window" style="color: #333;">
	          <h4>${cordinate.title}</h4>
	          <p style="font-size: 15px;"><i class="fas fa-map-marker-alt" style="margin-right: 10px;"></i> ${cordinate.adresse}&euro;</p>
	          <p style="font-size: 15px;"><i class="fas fa-map" style="margin-right: 10px;"></i> ${cordinate.code_postal}&euro;</p>
	          <p style="font-size: 15px;"><i class="fas fa-phone" style="margin-right: 10px;"></i>${cordinate.telephone}</p>
	        </div>
        `
    });

	return {
		infowindow,
		marker
	}
}

/**
 * @param {Object} map
 * @return {void}
 */ 
function openCardShopToMap(map) {
	jQuery(document).ready(function($) {
		$('.resultSearch').click((e) => {
			
			let cordinate = $(e.currentTarget).attr('data-cordinate')
				cordinate = JSON.parse(window.atob(cordinate))

			if (!cordinate) {
				return
			}

			const mapInfos = getInfoWindowAndMarkerMap(map, cordinate)
			const marker = mapInfos.marker
			const infowindow = mapInfos.infowindow

		    infowindow.open(map, marker);
		    google.maps.event.addListener(map, "click",()=> {infowindow.close();});
		})
	})
}

/**
 * Init Google Map Card with cordinates
 * @author Don de Dieu Bolenge
 * @param {Object} cordinates
 * @return {void}
 */ 
function initMap(cordinates) {
	const localization = {
		lat: 50.7294512,
		lng: 4.4607108
	}

	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 9,
	  center: localization
	});

	if (!cordinates) {
		return;
	}

	cordinates.map(cordinate => {
	    const mapInfos = getInfoWindowAndMarkerMap(map, cordinate)
		const marker = mapInfos.marker
		const infowindow = mapInfos.infowindow

	    marker.addListener("click", () => {
	       infowindow.open(map, marker);
	       google.maps.event.addListener(map, "click",()=> {infowindow.close();});
	    })
	});

	openCardShopToMap(map)
}