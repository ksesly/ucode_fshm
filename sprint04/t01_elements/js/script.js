function remaker() {
    let ul = document.getElementById('characters');
    let items = ul.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        let clAtr = items[i].getAttribute('class');

        if ( clAtr != 'good' &&
            clAtr != 'evil' ||
            !clAtr) {
                items[i].className = 'unknown';
        }

        if (!items[i].getAttribute('data-element')) {
            items[i].setAttribute('data-element', 'none');   
        }

        items[i].appendChild(document.createElement('br'));
        
        let elemList = items[i].getAttribute('data-element').split(' ');

        if (elemList.length > 1) {
            for (let j = 0; j < elemList.length; j++) {
                let circle = document.createElement('div');
                circle.setAttribute('class', `elem + ${elemList[j]}`);
                items[i].appendChild(circle);
            }
        }   
        else if (elemList.length == 1) {
            let circle = document.createElement('div');
            circle.setAttribute('class', `elem ${elemList}`);
            items[i].appendChild(circle);
            if (elemList[0] == 'none') {
                let line = document.createElement('div');
                line.setAttribute('class', `line`);
                circle.appendChild(line);
            }
        }
    }
}

remaker();