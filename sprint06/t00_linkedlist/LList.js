const LLData = require("./LLData");

module.exports = class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    getFirst() {
        if (!this.head)
            return;
        else 
            return this.head;
    }
    getLast() {
        if (!this.length)
            return;
        while (this.head.next) {
            this.head = head.next;
        }
        return this.head.next;
    }
    add(value) {
        let noda = new LLData(value);
        if (!this.head)
            this.head = noda;
        else if (this.length) {
            while(this.head.next) {
                this.head = head.next;
            }
            this.head = noda;
        }
    }
    addFromArray(arrayOfData) {
        arrayOfData.forEach(data => {
            this.add(data);
        })
    }
    remove() {
        if (!this.head) 
            return; 
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.length--;
                return;
            }
            current = current.next;
        }
    }
    removeAll() {
        if (!this.head) 
            return;
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
            this.length--;
        }
        let current = this.head;
        while (current && current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.length--;
            } else 
                current = current.next;
        }
    }
    contains() {
        return [...this].includes(value);
    }
    clear() {
        this.head = null;
    }
    count() {
        return this.length;
    }
    toString() {
        return this.join(', ');
    }
    filter(callback) {
        return [...this].filter(callback);
    }
    getIterator() {
        let current = this.head;

        const iterator = () => {
            if (!current) {
                return { done: true };
            }

            const value = current.value;
            current = current.next;

            return { value, done: false };
        };

        return iterator;
    }
}