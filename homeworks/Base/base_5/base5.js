// ## Сжатие глубокого объекта

// Необходимо написать функцию, которая бы сжимала некоторый глубокий объект в плоский вид.
// Задача должна быть решена минимум двумя способами: через рекурсию и через стек. Можно, также, решить через очередь.

//    ```js
//    const obj = {
//      a: {
//        b: [1, 2],
//        '': {c: 2}
//      }
//    };

//    /* {'a.b.0': 1, 'a.b.1': 2, 'a..c': 2} */
//    console.log(collapse(obj));
//    ```












// ------------------------------------------*****************------------------------------------------

// ## Валидация скобочных групп

// Необходимо написать функцию, которая бы принимала строку и возвращала true, если у каждого из символов `{`, `[` и `(` есть своя закрывающая пара и они стоят в правильной последовательности.

//    ```js
//    console.log(isValid('(hello{world} and [me])'));  // true
//    console.log(isValid('(hello{world)} and [me])')); // false
//    console.log(isValid(')'));                        // false
//    ```


const isValid = (str) => {

  const checkObj = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  let validation = true;
  let stack = []

  for (const letter of str) {
    switch (letter) {
      case '{':
      case '[':
      case '(':
        stack.push(letter);
        break;
      case '}':
      case ']':
      case ')':
        validation = checkObj[letter] === stack.pop();
        break;
    }
  }
  return validation
}

console.log(isValid('(hello{world} and [me])'));  // true
console.log(isValid('(hello{world)} and [me])')); // false
console.log(isValid(')'));                        // false


// ------------------------------------------*****************------------------------------------------

// Реализовать Priority Queue

function PQueue() {
  let queue = [1, 2, 3];
  return {
    push: function (value) {

    },
    shift: function () {
      return
    },
    display: function () {
      return queue
    }
  }
}

const pQueue = PQueue()
// pQueue.push(4)
// pQueue.push(-7)
// pQueue.push(31)
// //[-7,4,31]
// pQueue.shift()// -7
// console.log(pQueue.display()) // [4,31]
