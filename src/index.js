// import * as tooltip from 'script/elements/tooltip';
// import * as map from 'script/visuals/map';
// import * as resetbuttons from 'script/functionalities/resetButtons';
// import * as barchart from 'script/visuals/barchart';
// import * as slider from 'script/elements/slider';
// import * as overlay from 'script/elements/overlay';
// import * as handleTabs from 'script/functionalities/handleTabs';

// Fetching data - API/gist
// fetch('http://ringring.jorrr.nl/geojson-data-ringring.json')
// 	.then(response => response.json())
//     .then((dataRingRing) => console.log('dataRingRing=', dataRingRing));

// let dataRingRing;

// const endpointOne = 'https://gist.githubusercontent.com/joordy/a143d68573aa3dcaadcb34defb2745a4/raw/43267958a9135359da69478b089e0c360b441af3/ringring.json';
const endpointOne =
	'https://cors-anywhere.herokuapp.com/http://ringring.jorrr.nl/geojson-data-ringring.json'; // Endpoint Ring-Ring data (cycle routes)

const fetchedData = fetch(endpointOne).then((response) => response.json()); // Parses JSON data

// Getting both datasets through an Promise.all (is solved when all promises above get resolved)
fetchedData.then((response) => {
	let receivedData = response;
	filteredDataset(receivedData);
});

// Clean data - makes new array with needed data variables
function filteredDataset(nastyData) {
	const cleanData = nastyData.map((element) => {
		// const object = {};

		// console.log('2e rit - 1e dataTrack - lat', nastyData[0].features[1].geometry.coordinates[0][1]);
		// console.log('2e rit - 1e dataTrack - long', nastyData[0].features[1].geometry.coordinates[0][0]);
		
		console.log('Alle ritten', nastyData[0].features);

		// object.geometry.coordinates = element.geometry.coordinates;
		// object.properties = element.properties;

		// object.secondRideFirstTrackCoordinates = element.features[1].geometry.coordinates[0]; // Must be in another variable for mapdots/routes
		
		console.log('cleanData', cleanData);
		// return object; //maybe another way of coding this (vuurvos)
	});
}

// const combinedData =[cleanDataDay];
