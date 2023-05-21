let begin = prompt('Give me the number of beginning', '');
let end = prompt('Give me the number of ending', '');

if (begin == 0 || end == 0 || begin == undefined || end == undefined) {
    begin = 1;
    end = 100;
}

function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        let counter = 0;
        let result = null;
        if (i % 2 == 0) {
            result = `${i} is even`;
            counter++;
        }
        if (i % 3 == 0) {
            if (counter > 0) 
                result += `, a multiple of 3`;
            else 
                result = `${i} is a multiple of 3`;
                counter++;
        }
        if (i % 10 == 0) {
            if (counter > 0) {
                result += `, a multiple of 10`;
            }
            else
                result = `${i} is a multiple of 10`;
                counter++;
        }
        if (i % 2 != 0 && i % 3 != 0 && i % 10 != 0) {
           result = `${i} -\n`;
        }
        console.log(result);
    }
}

checkDivision(begin, end);