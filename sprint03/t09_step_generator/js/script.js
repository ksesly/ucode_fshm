let answer = false;
let number = 1;

function prompting() {
    let str = prompt(`Previouse result: ${number}.\n
                    Quit by writing 'stop' or enter a new number: `);
    if (str == 'stop') {
        answer = true;
    }
    if (Number.isInteger(Number(str)))
        number += (Number(str));
    else 
        console.error('Invalid number!');
    if (number > 10000) 
        number = 1;

}


while (!answer) {
    prompting();
}