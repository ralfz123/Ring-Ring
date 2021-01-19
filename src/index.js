// import * as tooltip from 'script/elements/tooltip';
// import * as map from 'script/visuals/map';
// import * as resetbuttons from 'script/functionalities/resetButtons';
// import * as barchart from 'script/visuals/barchart';
// import * as slider from 'script/elements/slider';
// import * as overlay from 'script/elements/overlay';
// import * as handleTabs from 'script/functionalities/handleTabs';

// ------------------ RingRing data fetch -------------------------------------

// Endpoint Ring-Ring data (cycle routes)
// const endpointOne =
// 	'https://cors-anywhere.herokuapp.com/http://ringring.jorrr.nl/geojson-data-ringring.json'; //

// Fetching data - API/gist
// fetch(endpointOne)
// 	.then((response) => response.json())
// 	.then((dataRingRing) => console.log('dataRingRing=', dataRingRing));

// async function setupMapData() {
//   let rawData = await getData();
//   drawMap(rawData);
//   console.log(rawData)
// }

// async function getData() {
//   const response = await fetch(endpointOne);
//   const json = await response.json();
//   return await json;
// }

// ------------------ Cycle Accidents data fetch -------------------------------------

// Endpoint Cycle accidents data (gist)
const accidentsData =
	'https://gist.githubusercontent.com/ralfz123/0a48d1cd9b3155c7442fe98332a9031e/raw/b8ccaf6949381f89aa90a4eb26018c912e509a5b/accidents_data-3.geojson';

// let data = [];
// console.log('data=', data);
// console.table(data);

// fetch(accidentsData)
// 	.then((response) => response.json())
// 	.then((cycleAccidentsData) => data.push(cycleAccidentsData));

// console.log(Object.values(data[0][1].gender));

// function getKeyByValue(object, value) {
// 	return Object.keys(object).find((key) => object[key] === value);
// }
// const map = { first: '1', second: '2' };
// console.log(getKeyByValue(map, '2'));


// let jsonData = '';

// let apiUrl =
// 	'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';

// async function getJson(url) {
// 	let response = await fetch(url);
// 	let data = await response.json();
// 	return data;
// }

// async function main() {
// 	jsonData = await getJson(accidentsData);
// 	console.log(jsonData);

// 	function getKeyByValue(object, value) {
// 		return Object.keys(object).find(key => object[key] === value);
// 	  }
// }

// main();

// export { data };

// 1. Jordy zijn fetch methode zien
// Data succesvol ophalen en opslaan in globale data variabele
// 2. loading scherm - in de app verwerken (auto scroll)
