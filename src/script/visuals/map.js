mapboxgl.accessToken =
	'pk.eyJ1IjoicmFsZjg4IiwiYSI6ImNrampzODg5MDFteTYycW83cWVoenZtaTgifQ.kLGZ-0NFqYzEtDLLEY5NbQ';
const map = new mapboxgl.Map({
	container: 'map',
	// style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
	style: 'mapbox://styles/ralf88/ckjjswhgo0xlt19nxxqoky3dy',
	center: [4.9, 52.38], 
	zoom: 11.4, 
});

// https://cors-anywhere.herokuapp.com/http://ringring.jorrr.nl/geojson-data-ringring.json

map.on('load', function () {
	map.addSource('routes', {
		type: 'geojson',
		data: 'https://cors-anywhere.herokuapp.com/http://ringring.jorrr.nl/geojson-data-ringring.json'
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
			'line-color': '#928',
			'line-width': 1,
		},
	});
});