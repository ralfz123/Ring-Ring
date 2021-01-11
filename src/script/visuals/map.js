mapboxgl.accessToken =
	'pk.eyJ1IjoicmFsZjg4IiwiYSI6ImNrampzODg5MDFteTYycW83cWVoenZtaTgifQ.kLGZ-0NFqYzEtDLLEY5NbQ';
const map = new mapboxgl.Map({
	container: 'map',
	// style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
	style: 'mapbox://styles/ralf88/ckjjswhgo0xlt19nxxqoky3dy',
	center: [4.9, 52.38],
	zoom: 11.4,
});

let endpointTwo =
	'https://gist.githubusercontent.com/ralfz123/d5946b682461a96c7e430f303610320f/raw/5865ec4d03495edcd9537cac8aba557a099ea556/accidents_data.json';
fetch(endpointTwo)
	.then((response) => response.json())
	.then((data) => console.log(data));
    var test = [];

function updateMap(data) {
    data.forEach(function(d) {
        test.push(JSON.parse('{"type": "Feature", "geometry": {"type": "Point", "coordinates": ['+d.location.lon+','+ d.location.lat+']}}'));
    });
    console.log(test)

}

map.on('load', function() {
    map.addSource("point", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": test
        }
    });
    map.addLayer({
        "id": "point",
        "type": "circle",
        "source": "point",
        "paint": {
            "circle-radius": 8,
            "circle-color": "#000"
        }
    });
});



// Cycling data plotted on the map ✅
// map.on('load', function () {
// 	map.addSource('routes', {
// 		type: 'geojson',
// 		data:
//             'https://cors-anywhere.herokuapp.com/http://ringring.jorrr.nl/geojson-data-ringring.json',
// 	});
// 	map.addLayer({
// 		id: 'route',
// 		type: 'line',
// 		source: 'routes',
// 		layout: {
// 			'line-join': 'round',
// 			'line-cap': 'round',
// 		},
// 		paint: {
// 			'line-color': '#928',
// 			'line-width': 1,
// 		},
// 	});})
