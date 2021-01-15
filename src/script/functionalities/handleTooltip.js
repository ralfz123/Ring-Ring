// https://stackoverflow.com/a/49333949

// import {}

const endpointTwo =
	'https://gist.githubusercontent.com/ralfz123/506502be46c91f5b5951e85f1b7c665b/raw/d64f127cd93cac901739745cfdb7807b776b6506/accidents_data.geojson';

fetch(endpointTwo)
	.then((response) => response.json())
	.then((cycleAccidentsData) =>
        // console.log('cycleAccidentsData=', cycleAccidentsData)
        console.log('moet 2020 zijn -', cycleAccidentsData.features[0].properties.year)
    );
    
    // let str = '';

    // for (let i = 0; i < 9; i++) {
    //   str = str + i;
    // }
    
    // console.log(str);
    // // expected output: "012345678"
    

// Check year, 
// Check state "Jaartal" value
// Determine year and select all those dataplots
// Plot these data on map and needed data on tooltip (outcome, street, age, (weather--> rainfall & wind (external dataset)), image_article_site and url_site)

// ------------------ SCRIPTING / FUNCTIONS ------------------------------------------------------------

// scripting function
// HTML elements that will be dynamic
let streetname = document.getElementById('tooltip-data-streetname');
let age = document.getElementById('tooltip-data-age');
let rainfall = document.getElementById('tooltip-data-rainfall');
let wind = document.getElementById('tooltip-data-wind');

// Example data
let dataStreetname = 'Karolano';
let dataAge = 30;
let dataRainfall = 013;
let dataWind = 10000;

// Function that replace the values of the HTML elements with dynamic data
streetname.innerHTML = dataStreetname;
age.innerHTML = dataAge;
rainfall.innerHTML = dataRainfall;
wind.innerHTML = dataWind;

// ------------------------------------------------------------------------------
