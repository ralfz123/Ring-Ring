const overlay = document.getElementById('instructions-overlay'); // Instructions-overlay in HTML
const infoButton = document.getElementById('info-button'); // Info button ('i') in right top corner

infoButton.addEventListener('mouseover', handleEventMouseOver);
infoButton.addEventListener('mouseout', handleEventMouseOut);

// When mouse hovers over icon, overlay will appear
function handleEventMouseOver() {
	overlay.style.display = 'block';
}

// When mouse not hover anymore over icon, overlay will disappear
function handleEventMouseOut() {
	overlay.style.display = 'none';
}
