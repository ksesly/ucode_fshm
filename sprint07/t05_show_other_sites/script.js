let subButton = document.getElementById('submit');

subButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    let urlForm = document.forms['urlForm'];
    let url = urlForm.elements['url'].value;

    let user = JSON.stringify({
        url: url,
    });

    let request = new XMLHttpRequest();

    request.open('POST', '/', true);

    request.setRequestHeader('Content-Type', 'application/json');

    request.addEventListener('load', function () {
        let receivedUser = JSON.parse(request.response);

        document.getElementById('urlText').innerText = `URL: ${receivedUser.url}`;
        document.getElementById('htmlText').innerText = receivedUser.html;

        urlForm.elements['url'].value = '';
    });

    request.send(user);
});
