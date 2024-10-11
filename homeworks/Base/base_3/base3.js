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

// console.log(list)

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


/**
 *    ```js
 const jackBlack = Structure([
 ['name', 'utf16', 10], // Число - это максимальное количество символов
 ['lastName', 'utf16', 10],
 ['age', 'u16'] // uint16
 ]);

 jackBlack.set('name', 'Jack');
 jackBlack.set('lastName', 'Black');
 jackBlack.set('age', 53);

 console.log(jackBlack.get('name')); // 'Jack'
 ```

 */

const Structure = (arr) => {
    return {
        i: 0,
        obj: {},

        set: function (key, value) {
            if (!arr[this.i][2] && value.length > arr[this.i][2]) return;

            let BYTES_PER_VALUE = value.length
            const buffer = new ArrayBuffer(BYTES_PER_VALUE)
            const view = new Uint8Array(buffer)
            for (let i = 0; i < BYTES_PER_VALUE; i++) {
                view[i] = value[i].charCodeAt();
            }

            this.obj[key] = view
            this.i++;
        },
        get: function (key) {
            if (typeof this.obj[key] === 'undefined') return;

            let str = '';
            for (let i = 0; i < this.obj[key].length; i++) {
                str += String.fromCharCode(this.obj[key][i])
            }
            return str;
        }
    }
}

const jackBlack = Structure([['name', 'utf16', 10], ['lastName', 'utf16', 10], ['age', 'u16']])

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 'Helloworld');
console.log(jackBlack.get('name'))
console.log(jackBlack.get('lastName'))


