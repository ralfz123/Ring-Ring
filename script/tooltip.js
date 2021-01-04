const tooltip = document.getElementById('tooltip'); // Tooltip in HTML
const mapPlot = document.querySelector('.map-plot'); // Map plot in datavisualization

mapPlot.addEventListener('click', handleEvent);

// When map plot is clicked, tooltip will appear
function handleEvent() {
	if (tooltip.style.visibility === 'visible') {
		tooltip.style.visibility = 'hidden';
	} else {
		tooltip.style.visibility = 'visible';
	}
}
