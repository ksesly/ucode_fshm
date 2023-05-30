let Naruto = document.querySelector('#naruto');
let starW = document.querySelector('#sw');
let Tower = document.querySelector('#tower');

Naruto.addEventListener('click', narutoPage);
starW.addEventListener('click', swPage);
Tower.addEventListener('click', towerPage);

function narutoPage() {
    document.getElementsByClassName('film-page1')[0].style.display = 'flex';
    document.getElementsByClassName('film-page2')[0].style.display = 'none';
    document.getElementsByClassName('film-page3')[0].style.display = 'none';
}

function swPage() {
    document.getElementsByClassName('film-page1')[0].style.display = 'none';
    document.getElementsByClassName('film-page2')[0].style.display = 'flex';
    document.getElementsByClassName('film-page3')[0].style.display = 'none';
}

function towerPage() {
    document.getElementsByClassName('film-page1')[0].style.display = 'none';
    document.getElementsByClassName('film-page2')[0].style.display = 'none';
    document.getElementsByClassName('film-page3')[0].style.display = 'flex';
}
