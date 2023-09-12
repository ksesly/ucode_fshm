module.exports = { calculateTime() {
        const startDate = new Date('1939-01-01');
        const currentDate = new Date();

        let timeDifference = currentDate - startDate;

        const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        timeDifference -= years * (365 * 24 * 60 * 60 * 1000);

        const months = Math.floor(timeDifference / (30 * 24 * 60 * 60 * 1000));
        timeDifference -= months * (30 * 24 * 60 * 60 * 1000);

        const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

        return { years, months, days };
    }
}


