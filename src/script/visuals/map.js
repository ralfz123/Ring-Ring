mapboxgl.accessToken =
	'pk.eyJ1IjoicmFsZjg4IiwiYSI6ImNrampzODg5MDFteTYycW83cWVoenZtaTgifQ.kLGZ-0NFqYzEtDLLEY5NbQ';
export var map = new mapboxgl.Map({
	container: 'map',
    // style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    style: 'mapbox://styles/ralf88/ckjjswhgo0xlt19nxxqoky3dy',
	center: [4.9, 52.38], // starting position [lng, lat]
    zoom: 11.4, // starting zoom
});
