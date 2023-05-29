let index = 1;
let time = 0;

slideImage(index);

function move(n) {
    slideImage(index += n);
}

function slideImage(n) {
    let slides = document.getElementsByClassName('imm');
    if (n > slides.length) 
        index = 1;
    if (n < 1) 
        index = slides.length;
    for (let i = 0; i < slides.length; i++) 
        slides[i].style.display = 'none';
    slides[index - 1].style.display = 'block';

    clearInterval(time);
    time = setInterval(show, 5000, index++)
}