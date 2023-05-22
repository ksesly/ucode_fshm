function checkBrackets(str) {
    if ( str == undefined || str.length == 0 || str == NaN ||
        str.indexOf('(') == -1 && str.indexOf(')') == -1)
        return -1;

    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == ')') 
            newStr += str[i];
     }

    let openBrackets = 0;
    let closeBrackets = 0;

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] == '(') {
            openBrackets++;
        }
        else if (newStr[i] == ')') {
            if (openBrackets > 0) {
                openBrackets--;
            }
            else 
                closeBrackets++;
        }
    }

    let result = openBrackets + closeBrackets;
    return result; 
}
