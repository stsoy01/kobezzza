/**
 * Написать функцию, которая принимает Uint8Array и позволяет обратиться к биту конкретного элемента
 * const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));
 *
 * // Второй параметр это порядок бита "справа-налево"
 * console.log(bitGetter.get(0, 1)); // 1
 * console.log(bitGetter.get(1, 1)); // 0
 */

//https://amedovbekmuhamet.netlify.app/blog/intro-array-buffer


const createBitGetter = (object) => {
    return {
        get: function (index1, index2) {
            return object[index1]
        }
    }
}

const bigGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]))
console.log(bigGetter.get(0, 1)) //1
console.log(bigGetter.get(1, 1)) //0
