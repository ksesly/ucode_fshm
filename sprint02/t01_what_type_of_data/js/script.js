// Number 
let number = 12;
let number1 = 12.333;

let bigint = 35146843513546843516546846541n;    // BigInt 

// String 
let string = 'pipipupa';
let string1 = `Hello ${string}`;

let bool = 3 < 2;   // Boolean

let nullik = null; // Null а ту мем с выводом, тип из за старой какой то неправильной реализации джса тут тип обжект

let und; // Undefined 

// Object 
let obj = { 
    first: 'micro',
    second: 'Wave'
}

let sym = Symbol('k');  // Symbol и как его вывести? 

function f() {} // Function

alert(`number and number1 values: ${number}(${typeof(number)}) and ${number1}(${typeof(number1)})\n 
       bigint value: ${bigint}(${typeof(bigint)})\n
       string and string1 values: ${string}(${typeof(string)}) and ${string1}(${typeof(string1)})\n 
       bool values: ${bool}(${typeof(bool)})\n 
       nullik: ${typeof(nullik)}\n 
       und: ${typeof(und)}\n
       obj values: ${obj.first}(${typeof(obj.first)}) and ${obj.second}(${typeof(obj.second)})\n 
       sym value: ${typeof(sym)}\n
       function value: ${typeof(f)} `);
