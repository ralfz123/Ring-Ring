// https://stackoverflow.com/a/49333949

function updateLegend() {
	let yearButtons = document.getElementsByName('year');

	var c;
	for (i = 0; i < yearButtons.length; i++) {
		if (yearButtons[i].checked) {
			c = yearButtons[i].value;
			console.log(c);
		}
	}

	document.getElementById('map-legend-year').innerHTML = c;

	// updateLegend() // Must be '2020' | default checked in HTML
}

const endpointTwo =
	'https://gist.githubusercontent.com/ralfz123/0a48d1cd9b3155c7442fe98332a9031e/raw/b8ccaf6949381f89aa90a4eb26018c912e509a5b/accidents_data-3.geojson';

window.onload = async () => {
	const response = await fetch(endpointTwo);
	const data = await response.json();

	init(data);
};

function init(data) {
	console.log('data = ', data);

	let dataArray = data.features;
	dataArray.forEach(function (item) {
		let year = item.properties.year;
		// console.log(year);
	});

	let yearFilter = document.getElementById('filter-pattern-year');
	yearFilter.data = data;
	yearFilter.on('change', () => {
		const index1 = data.property('value');

		if (index1 == 2017) {
			// select all data entries by 2017 and map() and plot (map.js)
		} else if (index1 == 2018) {
			// select all data entries by 2018 and map and plot (map.js)
		} else if (index1 == 2019) {
			// select all data entries by 2019 and map and plot (map.js)
		} else if (index1 == 2020) {
			// select all data entries by 2020 and map and plot (map.js)
		}

		// if (!index2) {
		// 	index2 = data[9];
		// }

		// index ? showDetail(d,index) : console.log('Not a valid index')
		makeNewData(index1, data);
	});
}
