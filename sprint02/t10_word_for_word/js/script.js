function addWords(object, addedPart) {
    let counter = 0;
    let array = object.words.trim().split(/\s+/g);
    let tempArray = addedPart.trim().split(/\s+/g);
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j <= array.length; j++) {
            if (array[i] == array[j]) {
                if (counter > 1)
                    array.splice(array[j], 1);
                counter++;
            }
        }
    }
    for (let i = 0; i < tempArray.length; i++) {
        if (array.includes(tempArray[i])) {
            tempArray.splice(tempArray.indexOf(tempArray[i]), 1);
        }
    }
    array = array.concat(tempArray);
    obj.words = array.join(' ').trim();
}

function removeWords(object, removePart) {
    let array = object.words.trim().split(/\s+/g);
    let tempArray = removePart.trim().split(/\s+/g);
    for (let i = 0; i < tempArray.length; i++) {
        if (array.includes(tempArray[i])) {
            array.splice(array.indexOf(tempArray[i]), 1);
        }
    }
    object.words = array.join(' ').trim();
}

function changeWords(object, oldPart, newPart) {
    removeWords(object, oldPart);
    addWords(object, newPart)
}