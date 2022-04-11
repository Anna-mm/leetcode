const startTime = Date.now();
setTimeout(function () {
    console.log(1);
}, 100);
new Promise(function (resolve) {
    console.log(2);
    resolve();
    console.log(3);
}).then(function () {
    console.log(4);
    new Promise((resove, reject) => {
        console.log(5);
        const endTime = Date.now() - startTime;
        console.log('heer', endTime);
        setTimeout(() => {
            console.log(6);
        }, 10);
    })
});
console.log(7); console.log(8);

// 2
// 3
// 7
// 8
// 4
// 5
// 6
// 1
// 最后两个搞反了，应该是 6，1。我以为是 1， 6
