class Human {
    constructor(firstName, lastName, gender, age, calories) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age; 
        this.calories = calories;
        document.getElementById('firstName').innerHTML = firstName;
        document.getElementById('lastName').innerHTML = lastName;
        document.getElementById('gender').innerHTML = gender;
        document.getElementById('age').innerHTML = age;
        document.getElementById('calories').innerHTML = calories;
        this.sleep = false;
        this.feeding = false;
    }

    sleepFor(sleepDelay) {
        if (!this.feeding && !this.sleep) {
            document.querySelector('.container .info').innerHTML = 'I`m sleeping';
            this.sleep = true;
            setTimeout(() => {
                document.querySelector('.container .info').innerHTML = 'I`m awake now';
                this.sleep = false;
                setTimeout(() => {
                    document.querySelector('.container .info').innerHTML = '';
                }, 2000)
            }, sleepDelay * 1000);
        }

    }

    feed() {
        if (!this.feeding && !this.sleep) {
            this.feeding = true;
            this.calories = +this.calories + 200;
            document.getElementById('calories').innerHTML = this.calories;
            document.querySelector('.container .info').innerHTML = 'Nom nom nom';
            setTimeout(() => {
                document.querySelector('.container .info').innerHTML = '';
                if (this.calories > 0 && this.calories < 500) {
                    document.querySelector('.container .info').innerHTML = 'I`m still hungry!';
                    this.feeding = false;
                }
                else {
                    document.querySelector('.container .info').innerHTML = 'I`m not hungry';
                    setTimeout(() => {
                        document.querySelector('.container .info').innerHTML = '';
                        this.feeding = false;
                    }, 2000)
                }
            }, 10000)
        }
    }
}

class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, age, gender, calories);
        this.flying = false;
        this.fighting = false;
        document.querySelector('.conteiner .hiden_img').classList.replace('hiden_img', 'image');
        document.querySelector('.conteiner .image').classList.replace('image', 'hiden_img');
        document.querySelector('.conteiner .buttons .hiden_btn').classList.replace('hiden_btn', 'new_btn');
        // document.querySelector('.conteiner .buttons .hiden_btn').classList.replace('hiden_btn', 'new_btn');
    }
    

    fly() {
        if(!this.flying && !this.fighting) {
            this.flying = true;
            document.querySelector('.containre, .info').innerHTML = 'Khhhh-chh... Bang-g-g-g... Evil is defeat!';
            setTimeout(() => {
                document.querySelector('.container .info').innerHTML = '';
                this.flying = false;
            }, 10000)
        }

    }

    fightWithEvil() {
        if(!this.flying && !this.fighting) {
            this.fighting = true;
            document.querySelector('.container .info').innerHTML = 'i`m flying!';
            setTimeout(() => {
                document.querySelector('.container .info').innerHTML = '';
                this.flying = false;
            }, 10000)
        }
    }
}

const human = new Human('mishka', 'tishka', 'male', 25, 0);
let superhero;
document.querySelector('.container .buttons .sleep').addEventListener('click', event => {
    human.sleepFor(prompt('Enter the number of seconds to sleep'));
})
document.querySelector('.container .buttons .feed').addEventListener('click', event => {
    human.feed();
})
document.querySelector('.container .turn').addEventListener('click', event => {
    if(human.calories >= 500) 
        superhero = new Superhero('lol', 'micron', 'king', 50, human.calories);
    else {
        document.querySelector('.container .info').innerHTML = 'Not enough calories';
    }
})
document.querySelector('.container .buttons .fly').addEventListener('click', event => {
    human.fly();
})
document.querySelector('.container .buttons .fight').addEventListener('click', event => {
    human.fightWithEvil();
})