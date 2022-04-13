// 执行题
let a = 100;

setTimeout(function () {
    console.log(1);
    a = 0;
}, 100);

new Promise(function (resolve) {
    console.log(2);
    resolve();
    console.log(3);
}).then(function () {
    console.log(4);
});

while(a--) {
    console.log(`a=${a}`);
}

// 2
// 3
// a=99 一直阻塞，阻塞之后
// 4
// 1
// 如果 while(true) 将会一直阻塞，不会执行后面的宏任务和微任务。
