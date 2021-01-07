var slider = document.getElementById('slider');

slider.addEventListener('input', onChange);

// Presents cycling gif when moving thumb - NOT WORKING YET
function onChange(event) {
	var x = event.target.value;
	console.log(x);

	if (x <= 3) {
        // does nothing 
        slider.className = '';
	} else if (x => 1 && x <= 6) {
		slider.className = 'MyClass-1';
	} else if (x > 6) {
		slider.className = 'MyClass-2';
	}
}
