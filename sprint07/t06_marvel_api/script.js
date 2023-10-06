document.addEventListener("DOMContentLoaded", () => {
    const ts = 'avengers';
    const key = '6a61bde48777fd16da1d4aaf1508f806';
    const hash = '9b0fcbace5108042fbcbbffbd267d471'

    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${key}&hash=${hash}`)
        .then(resp => resp.json())
        .then(function (res) {
            document.getElementById('code').innerText = res.code;
            document.getElementById('status').innerText = res.status;
            document.getElementById('copyright').innerText = res.copyright;
            document.getElementById('attrText').innerText = res.attributionText;
            document.getElementById('attrHTML').innerText = res.attributionHTML;
            document.getElementById('etag').innerText = res.etag;

            document.getElementById('offset').innerText = res.data.offset;
            document.getElementById('limit').innerText = res.data.limit;
            document.getElementById('total').innerText = res.data.total;
            document.getElementById('count').innerText = res.data.count;
        });
});
