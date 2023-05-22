function addZeroChecker (obj) { 
    let newStr = null;
    if (obj < 10 ) {
        newStr = '0' + obj;
    }
    else newStr = obj;
    return newStr;
}

function getFormattedDate(dateObject) {
    let array = [];

    let day = dateObject.getDate();
    let month = dateObject.getMonth() + 1;
    let year = dateObject.getFullYear();
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let weekday = dateObject.toLocaleString("en-Us", {weekday: 'long'}); 
    let resultDate = null; 

    array.push(day);
    array.push(month);
    array.push(year);
    array.push(hours);
    array.push(minutes);
    for (let i = 0; i < array.length; i++) {
        array[i] = addZeroChecker(array[i]);
    }

    return resultDate = `${array[0]}.${array[1]}.${array[2]} ${array[3]}:${array[4]} ${weekday}`;
}

// const date0= new Date(1993, 11, 1);
// const date1= new Date(1998, 0, -33);
// const date2= new Date('42 03:24:00');
// console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
// console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
// console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday