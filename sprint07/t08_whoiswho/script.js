let subButton = document.getElementById('submit');
let backButton = document.getElementById('Back');
let appButton = document.getElementById('apply');
let tab = document.getElementById('tab');
let first = document.getElementById('first');

function send_and_get() {
    let fileForm = document.forms['fileForm'];
    let myFile = fileForm.elements['csv'].value;
    let filter = document.getElementById('str').value;

    let user = JSON.stringify({
        myFile: myFile,
        filter: filter,
    });

    let request = new XMLHttpRequest();

    request.open('POST', '/', true);

    request.setRequestHeader('Content-Type', 'application/json');

    request.addEventListener('load', function () {
        let receivedUser = JSON.parse(request.response);

        document.getElementById('sel').setAttribute('style', 'display: block');
        let first = document.getElementById('first');
        first.innerHTML += receivedUser.headHTML;
        tab.innerHTML += receivedUser.bodyHTML;
    });

    request.send(user);
}

appButton.addEventListener('click',  (event) => {
    event.preventDefault();
    tab.innerHTML = '<tr id="first"></tr>';
    send_and_get();
});

backButton.addEventListener('click',  (event) => {
    event.preventDefault();
    tab.innerHTML = '<tr id="first"></tr>';
    document.getElementById('sel').setAttribute('style', 'display: none');
});

subButton.addEventListener('click',  (event) => {
    event.preventDefault();
    send_and_get();
});
