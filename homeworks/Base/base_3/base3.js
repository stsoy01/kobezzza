/**
 Реализовать двусторонний двусвязный список

 const list = LinkedList();

 list.add(1);
 list.add(2);
 list.add(3);

 console.log(list.first.value);           // 1
 console.log(list.last.value);            // 3
 console.log(list.first.next.value);      // 2
 console.log(list.first.next.prev.value); // 1
 */

class LinkedNode {

    value;
    next

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    first;
    last;

    constructor() {
        this.first = null;
        this.last = null;
    }

    add(value) {
        const node = new LinkedNode(value);

        if (!this.first) {
            this.first = node;
            this.last = node;
            return;
        }

        this.last.next = node;
        this.last = node;
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list)

/**
 * Сделать связанный список итерируемым *
 * const list = LinkedList();
 *
 * list.add(1);
 * list.add(2);
 * list.add(3);
 *
 * for (const value of list) {
 *   console.log(value);
 * }
 */
