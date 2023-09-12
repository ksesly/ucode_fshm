
function calculateTime() {
    let start = new Date(2004, 1, 1);
    let end = new Date();

    Date.prototype.years = function() { return end.getFullYear() - start.getFullYear() };
    Date.prototype.months = function()  { return end.getMonth() - start.getMonth() };
    Date.prototype.days = function() { return end.getDate() - start.getDate() };

    return new Date();
}

module.exports.calculateTime = calculateTime;