const validator = {
    set: (target, property, value) => {
        if (property === 'age') {
            if (!Number.isInteger(value)) 
                throw new TypeError('The age is not an integer');
            if (value < 0 || value > 200) 
                throw new RangeError('The age is invalid'); 
        }
        if (property === 'gender') {
            if (value != 'male' && value != 'female') 
                throw new TypeError('Are you sure?');
        }
        console.log(`Setting value '${value}' to '${property}'`);
        target[property] = value;
        return true;
    },


    get: (target, property) => {
        console.log(`Trying to access the property '${property}'...`);
        return target.hasOwnProperty(property) ? target[property] : false;
    }
    
}



// let person = new Proxy({}, validator);

// person.age = 100;
// // Setting value '100' to 'age'
// console.log(person.age);
// // Trying to access the property 'age'...
// // 100
// person.gender = "male";
// // Setting value 'male' to 'gender'
// person.age = 'young';
// // Uncaught TypeError: The age is not an integer
// person.age = 300;
// // Uncaught RangeError: The age is invalid
