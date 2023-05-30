let store = window.localStorage;

function clearfromArchive() {
	let con = confirm('Are you sure?');
	if (con == true) {
		localStorage.clear();
		document.querySelector('.for-notes').innerHTML = '';
	}
}

function addToArchive() {
	let input = document.getElementById('text-input').value;
	if (input == '') 
		alert('It\'s empty. Try to input something in "Text input".');
	else {
		let outputField = document.querySelector('.for-notes');
		if (outputField.innerHTML === '[Empty]') {
			outputField.innerHTML = '';
		}
		let items = JSON.parse(store.getItem('items')) || [];

		let currentDate = new Date();
	  	let dateTime = currentDate.toLocaleString();

		let message = `${input} [${dateTime}]`;
		items.push(message);

		store.setItem('items', JSON.stringify(items));
		document.querySelector('.for-notes').innerHTML = '';
		items.forEach(function(item) {
			document.querySelector('.for-notes').innerHTML += `--> ${item} <br>`;
		});
		document.getElementById('text-input').value = '';
	}
}
  

window.addEventListener('load', function() {
	let noteArchive = store.getItem('items');
	if (!noteArchive || noteArchive === '[]') {
		document.querySelector('.for-notes').innerHTML = '[Empty]';
	} 
	else {
		noteArchive = JSON.parse(noteArchive);
		noteArchive.forEach(function(item) {
		document.querySelector('.for-notes').innerHTML += `--> ${item} <br>`;
		});
	}
});

  