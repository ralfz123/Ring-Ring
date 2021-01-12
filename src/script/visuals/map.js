mapboxgl.accessToken =
	'pk.eyJ1IjoicmFsZjg4IiwiYSI6ImNrampzODg5MDFteTYycW83cWVoenZtaTgifQ.kLGZ-0NFqYzEtDLLEY5NbQ';
const map = new mapboxgl.Map({
	container: 'map',
	// style: 'mapbox://styles/mapbox/streets-v11',
	// style: 'mapbox://styles/ralf88/ckjjswhgo0xlt19nxxqoky3dy',
	style: 'mapbox://styles/ralf88/ckjtxwzmu0si719mwyiayscvr',
	center: [4.9, 52.38],
	zoom: 11.4,
});

// -----------------------------------------------------------------------------------------------------------------------------

// let endpointTwo =
// 	'https://gist.githubusercontent.com/ralfz123/d5946b682461a96c7e430f303610320f/raw/5865ec4d03495edcd9537cac8aba557a099ea556/accidents_data.json';

// fetch(endpointTwo)
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));
// var test = [];

// function updateMap(data) {
// 	data.forEach(function (d) {
// 		test.push(
// 			JSON.parse(
// 				'{"type": "Feature", "geometry": {"type": "Point", "coordinates": [' +
// 					d.location.lon +
// 					',' +
// 					d.location.lat +
// 					']}}'
// 			)
// 		);
// 	});
// 	console.log(test);
// }
// let dummyData =
// 	'https://cors-anywhere.herokuapp.com/https://docs.mapbox.com/help/data/stations.geojson';

// -----------------------------------------------------------------------------------------------------------------------------

// Cycling data plotted on the map ✅
map.on('load', function () {
	map.addSource('routes', {
		type: 'geojson',
		data:
			'https://cors-anywhere.herokuapp.com/http://ringring.jorrr.nl/geojson-data-ringring.json',
	});

	map.addLayer({
		id: 'route',
		type: 'line',
		source: 'routes',
		layout: {
			'line-join': 'round',
			'line-cap': 'round',
		},
		paint: {
			'line-color': '#3580cf',
			'line-width': 1,
		},
	});
});

// -----------------------------------------------------------------------------------------------------------------------------

// tooltip - https://docs.mapbox.com/help/tutorials/create-interactive-hover-effects-with-mapbox-gl-js/
// hover - https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/

// Hover over mapplot - Tooltip
// map.on('mousemove', 'state-fills', function (e) {
// 	if (e.features.length > 0) {
// 		if (hoveredStateId) {
// 			map.setFeatureState(
// 				{ source: 'states', id: hoveredStateId },
// 				{ hover: false }
// 			);
// 		}
// 		hoveredStateId = e.features[0].id;
// 		map.setFeatureState(
// 			{ source: 'states', id: hoveredStateId },
// 			{ hover: true }
// 		);
// 	}
// });

// // When the mouse leaves the state-fill layer, update the feature state of the
// // previously hovered feature.
// map.on('mouseleave', 'state-fills', function () {
// 	if (hoveredStateId) {
// 		map.setFeatureState(
// 			{ source: 'states', id: hoveredStateId },
// 			{ hover: false }
// 		);
// 	}
// 	hoveredStateId = null;
// });

// -----------------------------------------------------------------------------------------------------------------------------
