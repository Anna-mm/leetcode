Array.prototype.getReader = function () {
    const arr = this;
    // 读取指针
    let pointer = 0;
    return {
        read(number) {
            if (typeof number === "undefined") {
                number = 1;
            }
            else {
                if (typeof number !== "number"
                    || Math.abs(number) !== number
                    || Math.floor(number) !== number) {
                    return 'Error';
                }
            }

            if (pointer < arr.length) {
                const output = arr.slice(pointer, pointer + number);
                pointer += number;
                return output;
            } else {
                return [];
            }
        }
    };
};

const arr = [1, 2, 3, 4, 5, 6];
const reader = arr.getReader();

console.log(reader.read('1')); // Error
console.log(reader.read(-1)); // Error
console.log(reader.read(1.5)); // Error

console.log(reader.read()); // [1]
console.log(reader.read(1)); // [2]
console.log(reader.read(2)); // [3, 4]
console.log(reader.read(3)); // [5, 6]
console.log(reader.read()); // []
console.log(arr); // [1, 2, 3, 4, 5, 6]
