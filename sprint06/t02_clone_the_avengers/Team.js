const {Avenger} = require("./Avenger");

module.exports = class Team {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = avengers;
    }

    battle(damage) {
        this.avengers.forEach(i => {
            i.hp -= damage.damage;
        })
    }

    calculateLosses(clonedTeam) {
        let count = 0;
        clonedTeam.forEach(i => {
            if(i.hp < 1)
                count += 1;
        })
        if(count)
            console.log("In this battle we lost " + count + " Avengers.");
        else
            console.log("We haven't lost anyone in this battle!");
    }
    clone() {
        let tempArr = this.avengers.slice();
        return this.avengers = tempArr;
    }
}
