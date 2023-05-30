let tableData = [
        {superhero: 'Black Panther', strength: 66, age: 53},
        {superhero: 'Captain America', strength: 79, age: 137},
        {superhero: 'Captain Marvel', strength: 97, age: 36},
        {superhero: 'Hulk', strength: 80, age: 49},
        {superhero: 'Iron Man', strength: 88, age: 48},
        {superhero: 'Spider-Man', strength: 78, age: 16},
        {superhero: 'Thanos', strength: 99, age: 1000},
        {superhero: 'Thor', strength: 95, age: 1000},
        {superhero: 'Yon-Rogg', strength: 73, age: 52},
];

function tableCreation() {
    let table = document.createElement("table");

    let thead = table.appendChild(document.createElement('thead'));
    let trHead = thead.appendChild(document.createElement('tr'));
    let header = ['Name', 'Strength', 'Age']
    for (let k = 0; k < 3; k++) {
        let headCell = trHead.appendChild(document.createElement('th'));
        headCell.innerHTML = header[k];
        if (headCell.innerHTML == 'Name') {
            headCell.setAttribute('onclick', 'sortByName()');
        }
        else if(headCell.innerHTML == 'Strength') {
            headCell.setAttribute('onclick', 'sortByStrength()');
        }
        else {
            headCell.setAttribute('onclick', 'sortByAge()');
        }
    }
    let tbody = table.appendChild(document.createElement('tbody'));
    
    for (let i = 0; i < 9; i++) {
        let trBody = tbody.appendChild(document.createElement('tr'));
    
        let cell = trBody.appendChild(document.createElement('td'));
        cell.innerHTML = tableData[i].superhero;
    
        cell = trBody.appendChild(document.createElement('td'));
        cell.innerHTML = tableData[i].strength;
    
        cell = trBody.appendChild(document.createElement('td'));
        cell.innerHTML = tableData[i].age;
    }

    document.body.appendChild(table);
}


function sortByName() {
    let not = document.getElementById('notification');
    not.innerHTML = 'Sorting by Name, order: ASC.';
    tableData.sort((a, b) => {
        const nameA = a.superhero.toUpperCase();
        const nameB = b.superhero.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    refreshTable();
}

function sortByStrength() {
    let not = document.getElementById('notification');
    not.innerHTML = 'Sorting by Strength, order: ASC.';
    tableData.sort((a, b) => a.strength - b.strength);
    refreshTable();
}

function sortByAge() {
    let not = document.getElementById('notification');
    not.innerHTML = 'Sorting by Age, order: ASC.';
    tableData.sort((a, b) => a.age - b.age);
    refreshTable();
}

function refreshTable() {
    const tableBody = document.querySelector('tbody');
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    for (let i = 0; i < tableData.length; i++) {
        let trBody = tableBody.appendChild(document.createElement('tr'));

        let cell = trBody.appendChild(document.createElement('td'));
        cell.innerHTML = tableData[i].superhero;

        cell = trBody.appendChild(document.createElement('td'));
        cell.innerHTML = tableData[i].strength;

        cell = trBody.appendChild(document.createElement('td'));
        cell.innerHTML = tableData[i].age;
    }
}
tableCreation();