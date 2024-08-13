/**
 * Написать функцию, которая принимает Uint8Array и позволяет обратиться к биту конкретного элемента
 * // Второй параметр это порядок бита "справа-налево"
 * console.log(bitGetter.get(0, 1)); // 1
 * console.log(bitGetter.get(1, 1)); // 0
 *
 * Расширить функцию из прошлого задания возможностью изменять значение конкретного бита
 * // Третий параметр это заменяемое значение
 * console.log(bitAccessor.set(0, 1, 0)); //
 * console.log(bitAccessor.get(0, 1));    // 0
 */

const createBitGetter = (object) => {
    return {
        get: function (index1, index2) {
            return {
                fullValue:  (object[index1]).toString(2),
                getterValue: (object[index1]).toString(2).at(-1 - index2)
            }
        },
        set: function (index1, index2, newValue) {
            let arr = (object[index1]).toString(2).split('').reverse()
            arr[index2] = newValue
            object[index1] = parseInt(arr.reverse().join(''), 2);
        }
    }
}
const bigGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]))

console.log(bigGetter.get(0, 1)) // 1110 ----> 1 1100
console.log(bigGetter.get(1, 1)) // 1101 ----> 0
console.log(bigGetter.set(0, 1, 0)); //
console.log(bigGetter.get(0, 1));    // 0
