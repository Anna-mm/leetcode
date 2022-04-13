// 手写实现 promiseAll 和 promiseRace
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        // Iterable => Array
        promises = Array.from(promises);

        // 结果用一个数组维护
        const result = [];
        const len = promises.length;
        let count = 0;

        // 这里为什么不用 for of，因为要用索引 i
        for (let i = 0; i < len; i++) {
            // Promise.resolve 确保把所有数据都转化为 Promise
            Promise.resolve(promises[i]).then(value => {
                // 因为 promise 是异步的，保持数组一一对应
                result[i] = value;

                // 如果数组中所有 promise 都完成，则返回结果数组
                if (++count === len) {
                    resolve(result);
                }
                // 当发生异常时，直接 reject
            }).catch(e => reject(e))
        }
    })
}

function promiseRace(promises) {
    return new Promise((resolve,reject) => {
        for (const p of promises) {
            Promise.resolve(p)
                .then((res) => {
                    resolve(res)
                })
                .catch(e => {
                    reject(e)
                })
        }
    })
}

const sleep = (seconds) => new Promise(resolve => setTimeout(() => resolve(seconds), seconds))

// Test Case: 测试 promiseAll
// promiseAll([1, 2, 3]).then(o => console.log(o));

// promiseAll([
//     sleep(3000),
//     sleep(2000),
//     sleep(1000)
// ]).then(o => console.log(o));

// promiseAll([
//     sleep(3000),
//     sleep(2000),
//     sleep(1000),
//     Promise.reject(10000)
// ])
// .then(o => console.log(o))
// .catch(e => console.log(e, '<- Error'));

// Test Case: 测试 promiseRace

promiseRace([1, 2, 3]).then(o => console.log(o));

promiseRace([
    sleep(3000),
    sleep(2000),
    sleep(1000)
]).then(o => console.log(o));

promiseRace([
    sleep(3000),
    sleep(2000),
    sleep(1000),
    Promise.reject(10000)
])
.then(o => console.log(o))
.catch(e => console.log(e, '<- Error'));


