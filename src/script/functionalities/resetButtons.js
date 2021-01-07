export const allInput = document.getElementsByTagName('input');
export const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', handleEvent);

export function handleEvent() {
	for (var i = 0; i < allInput.length; i++) {
		var check = allInput[i];
		if (!check.disabled) {
			check.checked = false;
		}
	}
}
