module.exports = { calculateTime() {
        const quantumYears = Math.floor((Date.now() - Date.parse('1939-01-01')) / (7 * 365 * 24 * 60 * 60 * 1000));
        const quantumMonths = Math.floor((Date.now() - Date.parse('1939-01-01')) / (7 * 30 * 24 * 60 * 60 * 1000)) % 12;
        const quantumDays = Math.floor((Date.now() - Date.parse('1939-01-01')) / (7 * 24 * 60 * 60 * 1000)) % 30;

        return [quantumYears, quantumMonths, quantumDays];
    }
}

