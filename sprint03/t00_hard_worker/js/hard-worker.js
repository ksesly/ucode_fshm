class HardWorker {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    set setAge(info) {
        if (info > 0 && info < 100) {
            this.age = info;
        }
    }


    set setSalary(info) {
        if (info > 99 && info < 10000) {
            this.salary = info;
        }
    }

    toObject() {
        return this;
    }
   
}