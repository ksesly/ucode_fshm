class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.currentCount = 0;
        this.intervalId = null;
    }

    start() {
        console.log(`Timer '${this.title}' started.`);
        this.intervalId = setInterval(() => this.tick(), this.delay);
    }

    tick() {
        this.currentCount++;
        console.log(`Tick (${this.title}) ${this.currentCount}`);
        if (this.currentCount === this.stopCount) 
            this.stop();   
    }

    stop() {
        clearInterval(this.intervalId);
        console.log(`Timer '${this.title}' stopped after ${this.currentCount} cycles.`);
        this.currentCount = 0;
        this.intervalId = null;
    }
}


function runTimer(id, delay, counter) {
    const timer = new Timer(id, delay, counter);
    timer.start();
}



runTimer("Bleep", 1000, 5);
/*
Console output:

Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/
