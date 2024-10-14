// Реализовать вектор над типизированным массивом
//Вектор должен поддерживать интерфейс двусторонней очереди, как у нативных массивов JS.

/**
 * const uint8Vector = new Vector(Uint8Array, {capacity: 100});
 *
 * uint8Vector.push(100);    // 1
 * uint8Vector.push(20, 10); // 3
 *
 * uint8Vector.pop();        // 10
 * uint8Vector.shift();      // 100
 *
 * uint8Vector.unshift(1);          // 2
 * console.log(uint8Vector.length); // 2
 */

class Vector {
    typedArray;
    capacity;

    constructor(typedArray, {capacity}) {
        this.typedArray = typedArray;
        this.capacity = capacity
    }
}

const uint8vector = new Vector(Uint8Array, {capacity: 100})
console.log(uint8vector)


// ------------------------------------------*****************------------------------------------------
// Реализовать класс для описания 3 - х мерной матрицы

/**
 * const matrix = new Matrix3D({x: 10, y: 10, z: 10});
 *
 * matrix.set({x: 1, y: 3, z: 2}, 10);
 * matrix.get({x: 1, y: 3, z: 2});
 */

class Matrix3d {

    x;
    y;
    z;

    constructor({x, y, z}) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const matrix = new Matrix3d({x: 10, y: 10, z: 10});
console.log(matrix)

// ------------------------------------------*****************------------------------------------------
// Реализовать класс для создания хэш-таблицы

//В качестве ключей можно использовать примитивы или объекты. Алгоритм хэш-функции можно придумать любой.
// Коллизии можно решать через метод цепочек или используя открытую адресацию. Должна быть поддержка расширения внутреннего буфера.
// Задаем ёмкость внутреннего буфера
/**
 * const map = new HashMap(120);
 *
 * map.set('foo', 1);
 * map.set(42, 10);
 * map.set(document, 100);
 *
 * console.log(map.get(42));          // 10
 * console.log(map.has(document));    // true
 * console.log(map.delete(document)); // 10
 * console.log(map.has(document));    // false
 */

class HashMap {
    capacity;

    constructor(capacity) {
        this.capacity = capacity;
    }

    set(value) {

    };

    get() {

    }

    delete() {

    }

    has() {

    }
}

const map = new HashMap(120);
