// 关键点：
// 1. 利用 Promise.all 实现
// 2. 每个 promise 通过 map 进行转换操作无论成功还是失败都返回一个对象：成功返回 fullfiled 对象， 失败返回 rejected 对象

// if (Promise && !Promise.allSettled) {
    Promise.allSettledPolyfill = promises => Promise.all(
        promises.map((promise) => {
            return promise
                .then(value => ({state: "fulfilled", value: value }))
                .catch(reason => ({state: "rejected", reason: reason }))
        })
    );
// }

// Test Case1: 使用 Promise.all 遇到一个失败的即返回
{
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

Promise.all([resolved, rejected])
    .then(function (results) {
        console.log(results);
    }).catch(err => {
        console.log(err);
    })
}

// Test Case2: 使用 Promise.allSettled 遇到一个失败的即返回
{
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

Promise.allSettled([resolved, rejected])
    .then(function (results) {
        console.log(results);
    });
}

// Test Case3: 验证 polyfill
{
    const resolved = Promise.resolve(42);
    const rejected = Promise.reject(-1);

    Promise.allSettledPolyfill([resolved, rejected])
        .then(function (results) {
            console.log(results);
        });
}