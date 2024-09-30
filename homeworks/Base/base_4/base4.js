/**
 * Реализовать очередь на основе связанного списка
 *
 *     ```js
 *    const queue = Queue();
 *
 *    queue.push(10);
 *    queue.push(11);
 *    queue.push(12);
 *
 *    console.log(queue.head);  // 10
 *
 *    console.log(queue.pop()); // 10
 *
 *    console.log(queue.head);  // 11
 *
 *    console.log(queue.pop()); // 11
 *    console.log(queue.pop()); // 12
 *    console.log(queue.pop()); // Exception
 */

class QueueNode {
    value;
    next;

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedQueue {
    head;
    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const queueNode = new QueueNode(value);
        if (!this.head) {
            this.head = queueNode;
            this.tail = queueNode;
            return;
        }

        this.tail.next = queueNode;
        this.tail = queueNode;
    }
}

function Queue() {
    const linkedQueue = new LinkedQueue();

    return {
        push: function (val) {
            if (!val) return;

            linkedQueue.push(val)
        },
        pop: function () {
            if (!linkedQueue.head) {
                throw new Error('Queue is empty, there is no data to display');
            }

            if (linkedQueue.head.value && !linkedQueue.head.next) {
                const returnedValue = linkedQueue.head.value;
                linkedQueue.head = null;
                return returnedValue;
            }

            let currentNode = linkedQueue.head;
            while (currentNode) {
                if (!currentNode.next?.next) {
                    currentNode.next = null;
                    const returnedValue = linkedQueue.tail.value;
                    linkedQueue.tail = {value: currentNode.value, next: null}
                    return returnedValue;
                }

                currentNode = currentNode.next;
            }


        }
    }
}

const queue = Queue()
queue.push(10);
queue.push(11);
queue.push(12);
console.log('value: ', queue.pop());
console.log('value: ', queue.pop());
console.log('value: ', queue.pop());
console.log('value: ', queue.pop());

// console.log('this', queue.show());
/**
 * Реализовать двустороннюю очередь
 *
 *     ```js
 *    const dequeue = Queue();
 *
 *    dequeue.push(10);
 *    dequeue.unshift(11);
 *    dequeue.push(12);
 *
 *    console.log(dequeue.pop());   // 12
 *    console.log(dequeue.shift()); // 11
 *    console.log(dequeue.pop());   // 10
 *    console.log(dequeue.pop());   // Exception
 *    ``
 */
