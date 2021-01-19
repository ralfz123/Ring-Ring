const playButton = document.getElementById('play-button');
const playButtonContainer = document.getElementById('play-container');
const video = document.getElementById('video');

playButton.addEventListener('click', handleVideoButton);

function handleVideoButton() {
	video.play();
	playButton.style.display = 'none';
	playButtonContainer.style.display = 'none';
}

video.onended = function () {
	let instructionsOverlay = document.getElementById('instructions');

	instructionsOverlay.style.visibility = 'visible';
	instructionsOverlay.style.animation = 'fadeIn ease 4s';
};
