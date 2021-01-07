const overlay = document.getElementById('instructions-overlay'); // Instructions-overlay in HTML
const infoButton = document.getElementById('info-button'); // Info button ('i') in right top corner

infoButton.addEventListener('click', handleEvent);

// When map plot is clicked, tooltip will appear
function handleEvent() {
    console.log('clicked')
	if (overlay.style.display === 'block') {
		overlay.style.display = 'none';
	} else {
		overlay.style.display = 'block';
	}
}
