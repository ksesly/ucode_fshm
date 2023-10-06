let lists = document.getElementById('list');
let submitBtn = document.getElementById('submit');

let req = new XMLHttpRequest();

req.open('POST', '/', true);

req.setRequestHeader('Content-Type', 'application/json');

req.addEventListener('load', function () {
    let receivedUser = JSON.parse(req.response);
    lists.innerHTML = receivedUser.list;
});

req.send();

submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    let str = document.getElementById('str');
    let content = document.getElementById('content');

    if (str.value != '' && content.value != '') {
        let user = JSON.stringify({
            str: str.value,
            content: content.value,
        });

        let request = new XMLHttpRequest();

        request.open('POST', '/create', true);

        request.setRequestHeader('Content-Type', 'application/json');

        request.addEventListener('load', function () {
            let receivedUser = JSON.parse(request.response);
            lists.innerHTML = receivedUser.list;
        });

        str.value = '';
        content.value = '';
        request.send(user);
    }
});

function renderFile(event) {
    event.preventDefault();
    let el = event.target;

    let user = JSON.stringify({
        filename: el.innerText,
    });

    let req = new XMLHttpRequest();

    req.open('POST', '/read', true);

    req.setRequestHeader('Content-Type', 'application/json');

    req.addEventListener('load', function () {
        let receivedUser = JSON.parse(req.response);

        document.getElementById('file').setAttribute('style', 'display: block');
        document.getElementById('filename').innerText = receivedUser.filename;
        document.getElementById('cont').innerText = receivedUser.content;
    });

    req.send(user);
}

document.getElementById('delete').addEventListener('click', function (evt) {
    let del = document.getElementById('filename').innerText;

    let user = JSON.stringify({
        del: del,
    });

    let req = new XMLHttpRequest();

    req.open('POST', '/delete', true);

    req.setRequestHeader('Content-Type', 'application/json');

    req.addEventListener('load', function () {
        let receivedUser = JSON.parse(req.response);
        lists.innerHTML = receivedUser.list;
        document.getElementById('file').setAttribute('style', 'display: none');
    });

    req.send(user);
});
