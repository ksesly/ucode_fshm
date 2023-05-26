class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.currentCount = stopCount;
        this.intervalId = null;
    }

    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`);
        this.intervalId = setInterval(() => this.tick(), this.delay);
    }

    tick() {
        this.currentCount--; 
        console.log(`Timer ${this.title} Tick! | cycles left ${this.currentCount}`);
        if (this.currentCount == 0) 
            this.stop();  
    }

    stop() {
        clearInterval(this.intervalId);
        console.log(`Timer ${this.title} stopped`);
        this.currentCount = 0;
        this.intervalId = null;
    }
}


function runTimer(id, delay, counter) {
    const timer = new Timer(id, delay, counter);
    timer.start();
}



// runTimer("Bleep", 1000, 5);

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
