// function pageScroll() {
// 	window.scrollBy(0, 50); // horizontal and vertical scroll increments
// 	scrolldelay = setTimeout('pageScroll()', 7000); // scrolls every 100 milliseconds
// }
// pageScroll();

setTimeout(function () {
	let instructionsOverlay = document.getElementById('instructions');

	instructionsOverlay.style.visibility = 'visible';
	instructionsOverlay.style.animation = 'fadeIn ease 3s';
}, 9500);


var vid = document.getElementById("video");
vid.play();
// vid.load();

// opacity: 0.0;
// animation: fadeIn ease 10s;
// -webkit-animation: fadeIn ease 10s;

// @keyframes fadeIn {
//   0% {opacity:0;}
//   100% {opacity:1;}
// }
