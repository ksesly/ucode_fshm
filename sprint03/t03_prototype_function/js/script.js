String.prototype.removeDuplicates = function removeDuplicates() {

    let str = this.replace(/ +/g, ' ').trim();
    let array = str.split(' ');
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!resultArray.includes(array[i])) 
            resultArray.push(array[i]);
    }
    str = resultArray.join(' ');
    return str; 
}

// let str = "Giant Spiders?   What’s next? Giant Snakes?";
// console.log(str);
// // Giant Spiders?   What’s next? Giant Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?

// str = ". . . . ? . . . . . . . . . . . ";
// console.log(str);
// // . . . . ? . . . . . . . . . . .
// str = str.removeDuplicates();
// console.log(str);
// // . ?
