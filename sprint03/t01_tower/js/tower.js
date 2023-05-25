import Building from "./building.js";

// use "export default class Building" 
// instead of  "module.exports = class Building"
// in bulding.js

class Tower extends Building {
    constructor(floors, material, adress, hasElevator, arcCapacity, height) {
        super(floors, material, adress);
        this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = height;
        
    }

    getFloorHeight() {
        return this.height / this.floors;
    }

    setElevator() {
        return this.hasElevator ? '+' : '-';
    }
    
    toString() {
        return [
            super.toString(), 
            `Elevator: ${this.setElevator()}`, 
            `Arc reactor capacity: ${this.arcCapacity}`, 
            `Height: ${this.height}`, 
            `Floor height: ${this.getFloorHeight()}`
        ].join('\n');
    }

}

// const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
// starkTower.hasElevator = true;
// starkTower.arcCapacity = 70;
// starkTower.height = 1130;
// console.log(starkTower.toString());