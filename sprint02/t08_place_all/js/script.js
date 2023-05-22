function sortEvenOdd (array) {
    array.sort(function(a, b) {
        return  a % 2 - b % 2 || a - b;
    })
}