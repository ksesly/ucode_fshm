/*guestList
–contains names of invited guests
–if you give it your name, it will tell
     you if you're on the list
–if you ask who, or how many people are 
    invited, it will not tell you
–you can ask to remove someone by name off 
    the list, but not everyone at once 
*/

const guestList = new WeakSet();

let guest1 = { name: 'miska'};
let guest2 = { name: 'katjushka'};
let guest3 = { name: 'tigr'};
 
guestList.add(guest1);
guestList.add(guest2);
guestList.add(guest3);

console.log(guestList.has(guest1))

console.log({name: 'tigr'});

console.log(guestList);
console.log(guestList.size);

guestList.delete({name: 'tigr'});
console.log(guestList.has({name: 'tigr'}));


/* menu
–contains a list of unique dishes
    and their prices
–you can ask to name every available 
dish and its price, one after the othe 
*/

const menu = new Map();

menu.set('pasta', '5');
menu.set('water', '74');
menu.set('salad', '46');
menu.set('porige', '120');
menu.set('falafel', '30');

menu.forEach((value, key) => {
    console.log(key, value);
})

console.log(menu.has('pasta'));
console.log(menu.has('juice'));

menu.delete('porige');
console.log(menu.has('porige'));

console.log(menu.size);


/* bankVault
–contains safety deposit boxes, 
    each with unique credentials and some
    contents
–the only way to see the contents 
    of a box, is to provide its correct credentials 
*/

const bankVault = new WeakMap();

const safe1 = {};
const safe2 = {};
const safe3 = {};
const safe4 = {};

bankVault.set(safe1, ['credentials1', 'juweleries']);
bankVault.set(safe2, ['credentials2', 'money']);
bankVault.set(safe3, ['credentials3', 'food']);
bankVault.set(safe4, ['credentials4', 'books']);

console.log(bankVault.get(safe2, 'credentials2'));


const enteredCred  = safe1;
if (bankVault.has(enteredCred)) {
    const contents = bankVault.get(enteredCred);
    console.log(`Box contents: ${contents}`);
} else {
    console.log("Invalid credentials.");
}


// const enteredCred1  = safe36;
// if (bankVault.has(enteredCred1)) {
//     const contents = bankVault.get(enteredCred1);
//     console.log(`Box contents: ${contents}`);
// } else {
//     console.log("Invalid credentials.");
// }


/* coinCollection
–contains various coins, all unique
–if you want, you can see the entire collection
*/

const coinCollection = new Set();

coinCollection.add('old coin');
coinCollection.add('ancient coin');
coinCollection.add('jungle coin');
coinCollection.add('marine coin');
coinCollection.add('air coin');

console.log(coinCollection.has('ancient coin')); 

coinCollection.delete('air coin');

console.log(coinCollection);
console.log(coinCollection.size);


