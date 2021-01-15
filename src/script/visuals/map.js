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
			'https://gist.githubusercontent.com/ralfz123/997c3f3bd1a9a6aac5c915cff4dcf88c/raw/c9163cf56030724ad7b4c0d2deb42802b295a6ba/accidents_data-2.geojson',
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
			'line-width': 0.7,
			'line-opacity': 0.8,
		},
	});

	map.addLayer({
		id: 'accidents-viz',
		type: 'circle',
		source: 'outcome',
		paint: {
			'circle-stroke-color': 'black',
			'circle-stroke-width': 1,
			'circle-color': 'white',
			'circle-radius': {
				stops: [
					[1, 11],
					[8, 10],
					[11, 9],
					[16, 8],
				],
			},

			// https://docs.mapbox.com/mapbox-gl-js/example/data-driven-circle-colors/
			'circle-color': [
				'match',
				['get', 'outcome'],
				['Dodelijk', 'dodelijk'],
				'#ce3636',
				['Gewond', 'gewond'],
				'#e35e0d',

				// box-shadow: 0px 0px 30px red;
				// cursoir: drag

				/* fallback */ '#ccc',
			],
		},
	});

	var quakeID = null;

	map.on('click', 'accidents-viz', (e) => {
		map.getCanvas().style.cursor = 'pointer';
		document.getElementById('tooltip').style.display = 'block';

		// Set variables equal to the current feature's magnitude, location, and time
		var accidentOutcome = e.features[0].properties.outcome;
		var accidentStreet = e.features[0].properties.street;
		var accidentAge = e.features[0].properties.age;
		var accidentImage = e.features[0].properties.image_article_site;
		var accidentUrl = e.features[0].properties.url_site;
		var accidentSourceDate = e.features[0].properties.date_publicated;
		var acccidentSource = e.features[0].properties.source;

		// Check whether features exist
		if (e.features.length > 0) {
			let outcome = document.getElementById('tooltip-data-accident');
			let streetname = document.getElementById('tooltip-data-streetname');
			let age = document.getElementById('tooltip-data-age');
			let image = document.getElementById('tooltip-data-image'); // This one I have to research on how to replace the IMAGE link
			let url = document.getElementById('tooltip-data-url'); // This one I have to research on how to replace the URL
			let date = document.getElementById('tooltip-data-date-publicated');
			let source = document.getElementById('tooltip-data-source');

			// Display the data in the tooltip
			outcome.textContent = accidentOutcome;
			streetname.textContent = accidentStreet;
			age.textContent = accidentAge;
			image.src = accidentImage;
			url.href = accidentUrl;
			date.textContent = accidentSourceDate;
			source.textContent = acccidentSource;

			// If quakeID for the hovered feature is not null,
			// use removeFeatureState to reset to the default behavior
			// if (quakeID) {
			// 	map.removeFeatureState({
			// 		source: 'earthquakes',
			// 		id: quakeID,
			// 	});
			// }

			// quakeID = e.features[0].id;

			// When the mouse moves over the earthquakes-viz layer, update the
			// feature state for the feature under the mouse
			// map.setFeatureState(
			// 	{
			// 		source: 'earthquakes',
			// 		id: quakeID,
			// 	},
			// 	{
			// 		hover: true,
			// 	}
			// );
		}
	});

	// Change the cursor to a pointer when the mouse is over the places layer.
	map.on('mouseenter', 'places', function () {
		map.getCanvas().style.cursor = 'pointer';
	});

	// Change it back to a pointer when it leaves.
	map.on('mouseleave', 'places', function () {
		map.getCanvas().style.cursor = '';
	});
});

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
