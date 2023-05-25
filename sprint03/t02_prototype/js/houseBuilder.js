function HouseBlueprint(address, description, owner, size) {
    this.address = address;
    this.date = new Date(); // Встановлення значення з параметра `date`
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.averageBuildSpeed = 0.5;

    this.getDaysToBuild = () => {
        const daysToBuild = this.size / this.averageBuildSpeed;
        return daysToBuild;
    }
}

function HouseBuilder(address, description, owner, size, roomCount) {
    HouseBlueprint.call(this, address, description, owner, size);
    this.roomCount = roomCount;
}


// const house = new HouseBuilder('88 Crescent Avenue',
//     'Spacious town house with wood flooring, 2-car garage, and a back patio.',
//     'J. Smith',
//     110,
//     5);

// console.log(house.address);
// // '88 Crescent Avenue'

// console.log(house.description);
// // 'Spacious town house with wood flooring, 2-car garage, and a back patio.'

// console.log(house.size);
// // 110

// console.log(house.date);
// // [the current date], for example: 'Tue Aug 11 2020'

// console.log(house.owner);
// // J. Smith

// console.log(house.averageBuildSpeed);
// // 0.5

// console.log(house.getDaysToBuild());
// // 220

// console.log(house.roomCount);
// // 5