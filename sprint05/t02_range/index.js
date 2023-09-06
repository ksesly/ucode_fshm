module.exports = { checkDivision(a = 1, b = 60) {
        while(a <= b) {
            let divString = "";
            let divNumbers = [];
            if (a % 2 === 0 ) 
                divNumbers.push('2');
            if (a % 3 === 0 ) 
                divNumbers.push('3');
            if (a % 10 === 0 ) 
                divNumbers.push('10');
            
            if (divNumbers.length > 0) {
                divString += " is devided by ";
                divString +=  divNumbers.join(", is divisible by ");
            }
            else 
                divString += " -";
            console.log("The number " + a + divString);
            a++;
        }
    }
};