mapboxgl.accessToken =
	'pk.eyJ1IjoicmFsZjg4IiwiYSI6ImNrampzODg5MDFteTYycW83cWVoenZtaTgifQ.kLGZ-0NFqYzEtDLLEY5NbQ';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/ralf88/ckjyoqpeo1blc17nq932e1obc',
	center: [4.9, 52.38],
	zoom: 10.5,
});

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
			'https://gist.githubusercontent.com/ralfz123/0a48d1cd9b3155c7442fe98332a9031e/raw/b8ccaf6949381f89aa90a4eb26018c912e509a5b/accidents_data-3.geojson',
	});

	map.addLayer({
		id: 'Fietsdrukte',
		type: 'line',
		source: 'routes',
		layout: {
			visibility: 'none',
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
		id: 'Fietsongelukken',
		type: 'circle',
		source: 'outcome',
		layout: {
			visibility: 'visible',
		},
		paint: {
			'circle-stroke-color': [
				'match',
				['get', 'outcome'],
				['Dodelijk', 'dodelijk'],
				'#ce3636',
				['Gewond', 'gewond'],
				'#e35e0d',
				'#ccc',
			],
			'circle-stroke-opacity': 0.5,
			'circle-stroke-width': 5,
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
				'#ccc',
			],
		},
	});

	// source code below (mapbox docs) - https://docs.mapbox.com/help/tutorials/create-interactive-hover-effects-with-mapbox-gl-js/#define-the-hover-attribute
	// var quakeID = null;

	map.on('click', 'Fietsongelukken', (e) => {
		map.getCanvas().style.cursor = 'pointer';
		document.getElementById('tooltip').style.visibility = 'visible';

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
			let tooltipHeader = document.getElementById('tooltip-header');
			let outcome = document.getElementById('tooltip-data-accident');
			let streetname = document.getElementById('tooltip-data-streetname');
			let age = document.getElementById('tooltip-data-age');
			let image = document.getElementById('tooltip-data-image');
			let url = document.getElementById('tooltip-data-url');
			let date = document.getElementById('tooltip-data-date-publicated');
			let source = document.getElementById('tooltip-data-source');

			// Display the data in the tooltip
			outcome.textContent = // Capitalize first letter of the word
				accidentOutcome.charAt(0).toUpperCase() +
				accidentOutcome.slice(1);
			streetname.textContent = accidentStreet;

			// Checks if the age is a number, otherwise it is a invalid answer
			if (typeof accidentAge == 'number') {
				age.textContent = accidentAge + ' jaar';
			} else {
				age.textContent = 'Leeftijd onbekend';
			}

			image.src = accidentImage;
			url.href = accidentUrl;
			date.textContent = accidentSourceDate;
			source.textContent = acccidentSource;

			// Checks if outcome is equal to specific string and then border-left color changes.
			if (accidentOutcome == 'dodelijk') {
				tooltipHeader.style.borderLeft = '5px solid #ce3636';
			} else if (accidentOutcome == 'gewond') {
				tooltipHeader.style.borderLeft = '5px solid #e35e0d';
			}
		}
	});

	// Change the cursor to a pointer when the mouse is over the places layer.
	map.on('mouseenter', 'Fietsongelukken', function () {
		map.getCanvas().style.cursor = 'pointer';
	});

	// Change it back to a pointer when it leaves.
	map.on('mouseleave', 'Fietsongelukken', function () {
		map.getCanvas().style.cursor = 'grab';
	});

	// Hide and show data layer
	// https://docs.mapbox.com/mapbox-gl-js/example/toggle-layers/

	// enumerate ids of the layers
	var toggleableLayerIds = ['Fietsdrukte']; // , 'Fietsongelukken'

	// set up the corresponding toggle button for each layer
	// for (var i = 0; i < toggleableLayerIds.length; i++) {
	var id = toggleableLayerIds;

	var link = document.createElement('a');
	link.href = '#';
	link.className = 'absent';
	link.textContent = id;

	link.onclick = function (e) {
		var clickedLayer = this.textContent;
		e.preventDefault();
		e.stopPropagation();

		var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

		// toggle layer visibility by changing the layout object's visibility property
		if (visibility === 'visible') {
			map.setLayoutProperty(clickedLayer, 'visibility', 'none');
			this.className = 'absent';
		} else if (visibility === 'none') {
			map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
			this.className = 'active';
		}
	};

	var layers = document.getElementById(
		'filter-pattern-dataset-toggle-button'
	);
	layers.appendChild(link);
	// }
});
