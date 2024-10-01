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
          linkedQueue.tail = { value: currentNode.value, next: null }
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

// console.log('value: ', queue.pop());
// console.log('value: ', queue.pop());
// console.log('value: ', queue.pop());
// console.log('value: ', queue.pop());

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

const DeQueue = () => {
  return {
    queue: [],
    push: function (value) {
      this.queue[this.queue.length] = value;
    },
    unshift: function (value) {
      let step = this.queue.length;
      this.queue.length++;
      while (step > 0) {
        this.queue[step] = this.queue[step - 1]
        step--;
      }
      this.queue[0] = value;
    },
    pop: function () {
      if (!this.queue.length) return undefined;

      const value = this.queue[this.queue.length - 1];
      this.queue.length--;
      return value;

    },
    shift: function () {
      if (!this.queue.length) return undefined;

      const value = this.queue[0];
      let step = 0;
      while (step < this.queue.length) {
        this.queue[step] = this.queue[step + 1];
        step++
      }
      this.queue.length--;
      return value;
    },
  }
}

const dequeue = DeQueue()
dequeue.push(2);
dequeue.push(10);
dequeue.push(-32);
dequeue.unshift(-222);
dequeue.unshift(666);
// console.log(dequeue.shift())
// console.log(dequeue.queue)


/**
 * Реализовать стек на основе типизированного массива заданной длины
 *
 *     ```js
 *    const stack = Stack(Int32Array, 10);
 *
 *    stack.push(10);
 *    stack.push(11);
 *    stack.push(12);
 *
 *    console.log(stack.head);  // 12
 *    console.log(stack.pop()); // 12
 *    console.log(stack.head);  // 11
 *    console.log(stack.pop()); // 11
 *    console.log(stack.pop()); // 10
 *    console.log(stack.pop()); // Exception
 *    ```
 */

function Stack(typedArray, length) {
  let _tArray = new typedArray(length);


  return {
    head: 0,
    push: function (value) {
      for (let i = 0; i < _tArray.length; i++) {
        if (!_tArray[i]) {
          this.head = _tArray[i] = value;
          return;
        }
      }
    },

    pop: function () {
      for (let l = length; l > -1; l--) {

        if (!!_tArray[l]) {
          const rValue = _tArray[l]
          _tArray[l] = 0;
          this.head = _tArray[l - 1];
          return rValue
        }
      }
      throw new Error('Nothing to display');

    }
  }


  // console.log('typedArray', a)
}

const stack = Stack(Int32Array, 10)
stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.head);  // 12
console.log(stack.pop()); // 12
console.log(stack.head);  // 11
console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Exception
