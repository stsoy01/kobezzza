// реализовать очередь с приоритетом Priority Queue
//https://habr.com/ru/companies/alfa/articles/651005/
// как работают вирусы на компе
//

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

const obj = {
    a: {
        b: [1, 2],
        '': {c: 2}
    },
}

const collapse = (_obj) => {
    let collapseArr = [];
    // console.log(Object.entries(_obj)[0])
}

// console.log(collapse(obj))


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

// console.log(isValid('(hello{world} and [me])'));  // true
// console.log(isValid('(hello{world)} and [me])')); // false
// console.log(isValid(')'));                        // false


// ------------------------------------------*****************------------------------------------------
// Реализовать Priority Queue

function PQueue() {
    let queue = [];
    return {
        push: function (value) {
            if (!queue.length) {
                queue[queue.length] = value;
                return;
            }
            for (let i = 0; i < queue.length; i++) {
                if (queue[i] < value) {
                    queue.length++;
                    queue[i + 1] = value;
                }
            }
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
pQueue.push(4)
pQueue.push(5)
pQueue.push(6)
// pQueue.push(31)

// pQueue.shift()// -7
console.log(pQueue.display()) // [4,31]


// ------------------------------------------*****************------------------------------------------
//Дана строка s, найдите первый неповторяющийся символ в ней и верните его индекс. Если такого символа не существует, верните -1.

const findUniqueLetter = (str) => {
    const stringHeap = {};

    str.split('').map((el) => !stringHeap[el] ? stringHeap[el] = 1 : stringHeap[el] = -1)

    for (const letter in stringHeap) {
        if (stringHeap[letter] === 1) {
            return letter;
        }
    }
    return -1;


}

// console.log(findUniqueLetter('Your man on the road, he doin promo You said, keep our usiness on the low low'))

// ------------------------------------------*****************------------------------------------------

// Дан целочисленный массив nums. Разработайте алгоритм для случайного перемешивания массива. Все перестановки массива должны быть равновероятны в результате перемешивания.
// Реализуйте класс Solution:
// Solution(int[] nums): Инициализирует объект целочисленным массивом nums.
// int[] reset(): Сбрасывает массив в его исходную конфигурацию и возвращает его.
// int[] shuffle(): Возвращает случайное перемешивание массива.


class Solution {
    initialArr = [];
    shuffleArr = [];
    index = 0;

    constructor(nums) {
        this.initialArr = nums;
    }
    reset() {
        return this.initialArr;
    };
    shuffle() {
        let arr = [];
        let random;

        while (arr.length < this.initialArr.length) {
            random = this.generateRandomNumber();
            if (!arr.includes(this.initialArr[random])) {
                arr.push(this.initialArr[random]);
                this.shuffleArr[this.index] = arr[this.index];
                this.index++;
            }
        }
        return this.shuffleArr;
    };
    generateRandomNumber() {
        return Math.round(Math.random() * 8);
    };
}

const solution = new Solution([66, 2, -2, 5, 94, 21, 8, 1, 45]);
console.log(solution.reset());
console.log(solution.shuffle())
