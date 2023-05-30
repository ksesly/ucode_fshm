let cook = document.cookie;

function clearfromArchive() {
    let con = confirm('Are you sure?');
    if (con == true) {
        document.querySelector('.for-notes').innerHTML = '';
        document.cookie = 'noteArchive=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    } 
}

function addToArchive() {
    let input = document.getElementById('text-input').value;
    if (input == '') {
        alert('It\'s empty. Try to input something in "Text input".');
    } else {
        let outputField = document.querySelector('.for-notes');
        if (outputField.innerHTML === '[Empty]') {
          outputField.innerHTML = '';
        }
        cook = `--> ${input} <br>`;
        document.querySelector('.for-notes').innerHTML += cook;
        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30); 
        document.cookie = `noteArchive=${encodeURIComponent(document.querySelector('.for-notes').innerHTML)}; expires=${expirationDate.toUTCString()};`;
        document.getElementById('text-input').value = ''; 
    }
}
  

window.addEventListener('load', function() {
    let noteArchive = getCookie('noteArchive');
    if (!noteArchive || isCookieExpired('noteArchive')) {
        document.querySelector('.for-notes').innerHTML = '[Empty]';
    } else {
        noteArchive = decodeURIComponent(noteArchive);
        if (noteArchive.trim() !== '') {
        noteArchive = noteArchive.replace(/\n/g, '<br>');
        document.querySelector('.for-notes').innerHTML = noteArchive;
        }
    }
})

function getCookie(name) {
  let cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) {
      return cookiePair[1];
    }
  }
  return null;
}

