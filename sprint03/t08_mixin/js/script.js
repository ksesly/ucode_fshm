import HouseBuilder from "./houseBuilder.js";

let houseMixin = {
    wordReplace(prase1, phrase2) {
        this.description = this.description.replace(prase1, phrase2);
    },

    wordInsertAfter(phrase1, phrase2) {
        let arr = this.description.split(' ');
        if (arr.includes(phrase1)) {
            arr.splice(arr.indexOf(phrase1) + 1, 0, phrase2);
        }
        this.description = arr.join(' ');
    },

    wordDelete(phrase1) {
        let arr = this.description.split(' ');
        phrase1 = phrase1.trim();
        if (arr.includes(phrase1)) {
            arr.splice(arr.indexOf(phrase1), 1);
        }
        this.description = arr.join(' ');
    },

    wordEncrypt() {
        let encryptedArr = [];
        for (let i = 0; i < this.description.length; i++) {
            let charCode = this.description.charCodeAt(i);
            let encryptedChar = '';
            if ((charCode > 64 && charCode < 91) 
                || (charCode > 96 && charCode < 123)) {
                let isUpperCase = false;
                if (charCode > 64 && charCode < 91) {
                    isUpperCase = true;
                }
                encryptedChar = String.fromCharCode((charCode - (isUpperCase ? 65 : 97) + 13) % 26 + (isUpperCase ? 65 : 97));
                } 
            else {
                encryptedChar = this.description[i];
            }
            encryptedArr.push(encryptedChar);
        }
        this.description = encryptedArr.join('');
    },

    wordDecrypt() {
        let decryptedArr = [];
        for (let i = 0; i < this.description.length; i++) {
            let charCode = this.description.charCodeAt(i);
            let decryptedChar = '';
            if ((charCode > 64 && charCode < 91) 
                || (charCode > 96 && charCode < 123)) {
                let isUpperCase = false;
                if (charCode > 64 && charCode < 91) {
                    isUpperCase = true;
                }
                decryptedChar = String.fromCharCode((charCode - (isUpperCase ? 65 : 97) - 13 + 26) % 26 + (isUpperCase ? 65 : 97));
            } 
            else {
            decryptedChar = this.description[i];
            }
            decryptedArr.push(decryptedChar);
        }
        this.description = decryptedArr.join('');
    } 
}



// const house = new HouseBuilder('88 Crescent Avenue',
//     'Spacious town house with wood flooring, 2-car garage, and a back patio.',
//     'J. Smith', 110, 5);

// Object.assign(house, houseMixin);

// console.log(house.getDaysToBuild()); 
// // 220
// console.log(house.description);
// // Spacious town house with wood flooring, 2-car garage, and a back patio.

// house.wordReplace("wood", "tile");
// console.log(house.description);
// // Spacious town house with tile flooring, 2-car garage, and a back patio.

// house.wordDelete("town ");
// console.log(house.description);
// // Spacious house with tile flooring, 2-car garage, and a back patio.

// house.wordInsertAfter ("with", "marble");
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.

// house.wordEncrypt();
// console.log(house.description);
// // Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

// house.wordDecrypt();
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.
