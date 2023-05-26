class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Link {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value) {
        let noda = new Node(value);
        if (this.length != 0) {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
        else {
            this.head = noda;
        }
        this.length++;
    }

    remove(value) {

        let removed = false;

        while (this.head && this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            removed = true;
        }
        let current = this.head;
        while (current && current.next) {
            if (current.next.data === value) {
                current.next = current.next.next;
                this.length--;
                removed = true;
            } 
            else 
                current = current.next;
        }
        return removed;
    }


    contains(value) {
        let isContains = false;
        let current = this.head;
        while (current) {
            if (current.data === value) 
                isContains = true;
            current = current.next;
        }
        return isContains;

    }

    [Symbol.iterator] = function() {
        let current = this.head;
        return { 
            next() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    count() {
        return this.length;
    }

    log() {
        let str = '';
        let current = this.head;
        while(current) {
            str += current.data;
            if ( current.next) 
                str += ', ';
            
            current = current.next;
        }
        console.log(str);
    }
}

let createLinkedList = (arrray) => {
    const list = new Link();
    arrray.forEach(value => list.add(value));
    return list;
}


// const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
// ll.log();
// // "100, 1, 2, 3, 100, 4, 5, 100"
// while(ll.remove(100));
// ll.log();
// // "1, 2, 3, 4, 5"
// ll.add(10);
// ll.log();
// // "1, 2, 3, 4, 5, 10"
// console.log(ll.contains(10));
// // "true"
// let sum = 0;
// for(const n of ll) {
//     sum += n;
// }
// console.log(sum);
// // "25"
// ll.clear();
// ll.log();
// // ""