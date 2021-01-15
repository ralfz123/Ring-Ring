// import {data} from '../../index'

// console.log('MAP: data -', data)

mapboxgl.accessToken =
	'pk.eyJ1IjoicmFsZjg4IiwiYSI6ImNrampzODg5MDFteTYycW83cWVoenZtaTgifQ.kLGZ-0NFqYzEtDLLEY5NbQ';
const map = new mapboxgl.Map({
	container: 'map',
	// style: 'mapbox://styles/mapbox/streets-v11',
	// style: 'mapbox://styles/ralf88/ckjjswhgo0xlt19nxxqoky3dy',
	style: 'mapbox://styles/ralf88/ckjtxwzmu0si719mwyiayscvr',
	center: [4.9, 52.38],
	zoom: 10,
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

	// fetch external API and then put it in the data var below, then it can be plotted as expected
	map.addSource('outcome', {
		type: 'geojson',
		data:
			'https://gist.githubusercontent.com/ralfz123/506502be46c91f5b5951e85f1b7c665b/raw/d64f127cd93cac901739745cfdb7807b776b6506/accidents_data.geojson',
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

	map.addLayer({
		id: 'accidents-viz',
		type: 'circle',
		source: 'outcome',
		paint: {
			// 'circle-stroke-color': 'blue',
			// 'circle-stroke-width': 1,
			'circle-color': 'white',
			// Zoom in at scrolling
			// 'circle-radius': {
			// 	'base': 1.75,
			// 	'stops': [
			// 	[12, 2],
			// 	[22, 180]
			// 	]
			// 	},

			'circle-color': [
				'match',
				['get', 'outcome'],
				['Dodelijk', 'dodelijk'],
				'#ce3636',
				['Gewond', 'gewond'],
				'#e35e0d',

				/* fallback */ '#ccc',
			],
		},
	});

	var quakeID = null;





	map.on('mousemove', 'accidents-viz', (e) => {
		map.getCanvas().style.cursor = 'pointer';
		// Set variables equal to the current feature's magnitude, location, and time
		var accidentOutcome = e.features[0].properties.outcome;
		var accidentStreet = e.features[0].properties.street;
		var accidentAge = e.features[0].properties.age;
		// var accidentImage = e.features[0].properties.image_article_site;
		// var accidentUrl = e.features[0].properties.url_site;

		// Check whether features exist
		if (e.features.length > 0) {

			let outcome = document.getElementById('tooltip-data-accident');
			let streetname = document.getElementById('tooltip-data-streetname');
			let age = document.getElementById('tooltip-data-age');


			// Display the magnitude, location, and time in the sidebar
			outcome.textContent = accidentOutcome;
			streetname.textContent = accidentStreet;
			age.textContent = accidentAge;
			// magDisplay.textContent = accidentImage;
			// magDisplay.textContent = accidentUrl;


						

			// If quakeID for the hovered feature is not null,
			// use removeFeatureState to reset to the default behavior
			if (quakeID) {
				map.removeFeatureState({
					source: 'earthquakes',
					id: quakeID,
				});
			}

			quakeID = e.features[0].id;

			// When the mouse moves over the earthquakes-viz layer, update the
			// feature state for the feature under the mouse
			map.setFeatureState(
				{
					source: 'earthquakes',
					id: quakeID,
				},
				{
					hover: true,
				}
			);
		}
	});
});

// ------------------ SCRIPTING / FUNCTIONS ------------------------------------------------------------

// scripting function
// HTML elements that will be dynamic
// let outcome = document.getElementById('tooltip-data-accident');
// let streetname = document.getElementById('tooltip-data-streetname');
// let age = document.getElementById('tooltip-data-age');
// let rainfall = document.getElementById('tooltip-data-rainfall');
// let wind = document.getElementById('tooltip-data-wind');

// Function that replace the values of the HTML elements with dynamic data
// streetname.innerHTML = dataStreetname;
// age.innerHTML = dataAge;
// rainfall.innerHTML = dataRainfall;
// wind.innerHTML = dataWind;

// ------------------------------------------------------------------------------

// data dynamic 🚨 - https://docs.mapbox.com/help/tutorials/create-interactive-hover-effects-with-mapbox-gl-js/#define-the-hover-attribute

// -----------------------------------------------------------------------------------------------------------------------------

// tooltip data html - https://docs.mapbox.com/help/tutorials/create-interactive-hover-effects-with-mapbox-gl-js/
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
const endpointTwo =
	'https://gist.githubusercontent.com/ralfz123/d5946b682461a96c7e430f303610320f/raw/5865ec4d03495edcd9537cac8aba557a099ea556/accidents_data.json';

// fetch(endpointTwo)
// 	.then((response) => response.json())
// 	.then((cycleAccidentsData) =>
// 		console.log('cycleAccidentsData=', cycleAccidentsData)
// 	);

// 	let cycleAccidentsData;
// 	console.log('cycleAccidentsData', cycleAccidentsData)

// for loop
