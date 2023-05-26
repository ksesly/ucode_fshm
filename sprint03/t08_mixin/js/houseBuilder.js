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

export default function HouseBuilder(address, description, owner, size, roomCount) {
    HouseBlueprint.call(this, address, description, owner, size);
    this.roomCount = roomCount;
}