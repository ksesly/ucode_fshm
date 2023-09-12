
function calculateTime() {
    let start = new Date(1939, 1, 1);
    let end = new Date();

    let quantum = new Date(Number(start) + Number( (Math.abs(start) + Number(end))/7 ));

    let result = []
    result.push(quantum.getFullYear() - start.getFullYear())
    result.push(quantum.getMonth() - start.getMonth())
    result.push(quantum.getDate() - start.getDate())
    return result;

}

module.exports.calculateTime = calculateTime;