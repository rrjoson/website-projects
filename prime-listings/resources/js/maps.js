function initMap() {
	var mapDiv = document.getElementById('filter-map');

	/************************************************************/
	/************************************************************/
	/***********************INITIALIZE MAP***********************/
	/************************************************************/
	/************************************************************/

	var map = new google.maps.Map(mapDiv, {
		center: {lat: 14.5800, lng: 121.0000},
		zoom: 13,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	/************************************************************/
	/************************************************************/
	/***********************CREATE INFO WINDOW*******************/
	/************************************************************/
	/************************************************************/

    var infowindow = new google.maps.InfoWindow();

    /************************************************************/
    /************************************************************/
    /***********************CREATE VARIABLES*********************/
    /************************************************************/
    /************************************************************/

    var marker, i;
    var markers = [];

    /************************************************************/
	/************************************************************/
	/***********************LOOP THROUGH THE ARRAY***************/
	/************************************************************/
	/************************************************************/

	for (i = 0; i < data.properties.length; i++) {
		var property = data.properties[i];

		marker = new google.maps.Marker({
			position: new google.maps.LatLng(property.latitude, property.longitude),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(

				    /************************************************************/
				    /************************************************************/
				    /***********************INFO WINDOW TEMPALTE*****************/
				    /************************************************************/
				    /************************************************************/

					'<div class="marker-info">'+
						'<a href="'+
						property.link+
						'" class="image-item">'+
							'<figure class="img-container">'+
								'<img class="inner-img img-responsive" src="'+
								property.image+
								'">'+
								'<figcaption class="overlay"></figcaption>'+
							'</figure>'+
							'<h3 class="property-name">'+
							property.name+
							'</h3>'+
							'<small class="property-type">'+
							property.type+
							'</small>'+
						'</a>'+
					'</div>'
				);
				infowindow.open(map, marker);
			}
		})(marker, i));
		markers.push(marker);
	}

	/************************************************************/
	/************************************************************/
	/***********************CLUSTER MARKER ICON******************/
	/************************************************************/
	/************************************************************/

	var styles = [{
	  url: 'resources/images/map_marker.png',
	  height: 24.5,
	  width: 24,
	  textColor: 'black',
	  textSize: 12
	}, {
	  url: 'resources/images/map_marker.png',
	  height: 24.5,
	  width: 24,
	  textColor: 'black',
	  textSize: 12
	}, {
	  url: 'resources/images/map_marker.png',
	  height: 24.5,
	  width: 24,
	  textColor: 'black',
	  textSize: 12
	}];

	/************************************************************/
	/************************************************************/
	/***********************MARKER CLUSTERER*********************/
	/************************************************************/
	/************************************************************/

	var markerCluster = new MarkerClusterer(map, markers, {
		styles: styles
	});
}