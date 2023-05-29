function transformation() {
    let lab = document.getElementById('lab');
    let hero = document.getElementById('hero');
    if(lab.style.backgroundColor === 'rgb(255, 179, 0)') {
        lab.style.backgroundColor = '#70964b';
        hero.innerHTML = 'Hulk';
        hero.style.fontSize = '130px';
        hero.style.letterSpacing = '6px';

    }
    else {
        lab.style.backgroundColor = '#ffb300';
        hero.innerHTML = 'Bruce Banner';
        hero.style.fontSize = '60px';
        hero.style.letterSpacing = '2px';
    }
}