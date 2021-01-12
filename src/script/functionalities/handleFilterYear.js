// https://stackoverflow.com/a/49333949

function updateLegend() {
	let yearButtons = document.getElementsByName('year');

	var c;
	for (i = 0; i < yearButtons.length; i++) {
		if (yearButtons[i].checked) {
			c = yearButtons[i].value;
		}
	}

	document.getElementById('map-legend-year').innerHTML = c;
}
