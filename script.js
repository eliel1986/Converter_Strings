// funcão converter todas strings em maiúsculas //
function uppercase() {
	let text = document.getElementById('text').value;
	let convert = text.toUpperCase();
	document.getElementById('text').value = convert;
}

// funcão converter todas strings em minúsculas //
function lowercase() {
	let text = document.getElementById('text').value;
	let convert = text.toLowerCase();
	document.getElementById('text').value = convert;
}

// funcão converter primeira string em maiúscula //
function firstUpper() {
	let text = document.getElementById('text').value;
	let convert = text[0].toUpperCase() + text.substr(1);
	document.getElementById('text').value = convert;
}

function firstLetter() {
	var text = document.getElementById('text').value;
	var loweredText = text.toLowerCase();
	var words = loweredText.split(" ");

	for (var a = 0; a < words.length; a++) {
		var w = words[a];
		var firstLetter = w[0];

		if (w.length > 2) {
			w = firstLetter.toUpperCase() + w.slice(1);
		} else {
			w = firstLetter + w.slice(1);
		}
		words[a] = w;
	}

	document.getElementById('text').value = words.join(" ");
}

function reset() {
	let text = document.getElementById('text').value = '';
}



