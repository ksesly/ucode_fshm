function concat(string1, string2 = null) {
    let result = null; 
    if (string2 != undefined || string2 != null) {
        let result = string1.concat(' ', string2);
        return result;
    }
    function secondPhraseSetter() {
        secondPhraseSetter.count += 1;
        let temp = prompt("Enter second phrase: ");
        return result = string1.concat(' ', temp)
    }
    secondPhraseSetter.count = 0;
    return secondPhraseSetter;
}
