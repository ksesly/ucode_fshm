const stones = document.querySelectorAll('.stone');

let dragEnabled = true;

function enableDrag() {
    dragEnabled = true;
    stones.forEach((stone) => {
        if (stone.classList.contains('draggable')) {
            stone.setAttribute('draggable', 'true');
            stone.addEventListener('dragstart', dragStart);
            stone.addEventListener('dragend', dragEnd);
        }
    })
}

function disableDrag() {
    dragEnabled = false;
    stones.forEach((stone) => {
        stone.setAttribute('draggable', 'false');
        stone.removeEventListener('dragstart', dragStart);
        stone.removeEventListener('dragend', dragEnd);
    })
}

function dragStart(event) {
    if (!dragEnabled) return;
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.classList.add('dragging');
}

function dragEnd(event) {
    event.target.classList.remove('dragging');
}

function dragOver(event) {
     event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    if (dragEnabled && event.target.classList.contains('droppable')) 
        event.target.classList.add('drag-enter');
    
}

function dragLeave(event) {
    event.target.classList.remove('drag-enter');
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove('drag-enter');
    const stoneId = event.dataTransfer.getData('text/plain');
    const stone = document.getElementById(stoneId);
    if (stone && event.target.classList.contains('droppable')) 
        event.target.appendChild(stone);
}


stones.forEach((stone) => {
    stone.addEventListener('dragenter', dragEnter);
    stone.addEventListener('dragleave', dragLeave);
    stone.addEventListener('dragover', dragOver);
    stone.addEventListener('drop', drop);
})

stones.forEach((stone) => {
    stone.addEventListener('click', () => {
        if (stone.getAttribute('state') === 'on') {
            stone.setAttribute('state', 'off');
            stone.classList.remove('draggable');
            stone.removeAttribute('draggable');
            stone.classList.add('off');
        }
        else {
            stone.setAttribute('state', 'on');
            stone.classList.add('draggable');
            stone.setAttribute('draggable', 'true');
            stone.classList.remove('off');
        }
    })
})
