const tooltip = document.getElementById('tooltip'); // Tooltip in HTML
const disappearButton = document.querySelector('.disappear-button'); // Map plot in datavisualization

disappearButton.addEventListener('click', handleEvent);

// When button is clicked, tooltip will disappear
function handleEvent() {
  tooltip.style.visibility = 'hidden';
}
