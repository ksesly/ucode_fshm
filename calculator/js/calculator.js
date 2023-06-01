
function createBasicCalculator() {
    let mainDiv = document.getElementsByClassName('calculator')[0];

    let div = document.createElement('div'); 

    let modeChooser = div;
    modeChooser.setAttribute('class', 'mode-chooser');
    let outputField = div;
    outputField.setAttribute('class', 'output-field');
    let numberTable = div;
    numberTable.setAttribute('class', 'number-table');

    mainDiv.appendChild(modeChooser);
    mainDiv.appendChild(outputField);
    mainDiv.appendChild(numberTable);
}   

createBasicCalculator();