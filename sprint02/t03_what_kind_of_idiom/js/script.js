/*ALLOWED FUNCTIONS alert(), prompt(), Number.*
DESCRIPTIONCreate a JS file that will be included into the HTML page written in theSYNOPSIS.
The script must:
call a prompt() method and take a number from 1 to 10 as an input value
•check that the input value is a number, and exactly from 1 to 10. 
If the input valuewill be not 1-10 - theprompt()method must ask for a number again
•show an idiom withalert()method 
The idiom must depend on the input value in the following way:
1 -Back to square 1
2 -Goody 2-shoes
3 or 6 -Two's company, three's a crowd
4 or 9 -Counting sheep5 -Take five -Seventh heaven
8 -Behind the eight-ball
10 -Cheaper by the dozen

*/

let number = null; 
let isInt = false;
while (number > 10 || number < 1 || number == null) {
    number = prompt('Give me a number from 1 to 10', '');
    isInt = Number.isInteger(number);
}

number = Number.parseInt(number);

switch (number) {
    case 1: 
        alert('Back to square 1');
    break;
    case 2:
        alert('Goody 2-shoes');
    break;
    case 3: 
    case 6:
        alert('Two\'s company, three\'s a crows');
    break;
    case 4:
    case 9:
        alert('Counting sheep');
    break;
    case 5: 
        alert('Take five');
    break;
    case 7:
        alert('Seventh heaven');
    break;
    case 8: 
        alert('Behind the eigth-ball');
    break;
    case 10: 
        alert('Cheaper by dozen');
    break;

}
