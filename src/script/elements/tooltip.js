export const tooltip = document.getElementById('tooltip'); // Tooltip in HTML
export const mapPlot = document.querySelector('.map-plot'); // Map plot in datavisualization

mapPlot.addEventListener('click', handleEvent);

// When map plot is clicked, tooltip will appear
export function handleEvent() {
	if (tooltip.style.display === 'block') {
		tooltip.style.display = 'none';
	} else {
		tooltip.style.display = 'block';
	}
}
