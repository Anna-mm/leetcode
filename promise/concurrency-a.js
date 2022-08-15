// 待运行队列
const queue=[1,2,3,4,5,6,7,8,9,10];
// 正在运行的队列，是为了打印日志验证逻辑，可以不用。
const runningQueue = [];
// 并发度限制
const concurrency = 3;
// 正在执行的任务数量
let running = 0;

next();


// 这里是一个递归
function next() {
    while(running < concurrency && queue.length) {
        const task = queue.shift();
        runningQueue.push(task);
        console.log('正在运行的任务', runningQueue);
        fetch(task).then(() => {
            running--;
            runningQueue.splice(runningQueue.indexOf(task), 1);
            next();
        })
        running++;
    }
    // 所有都完成
    if (queue.length === 0 && running === 0) {
        console.log('all task done');
    }
}

function fetch(index) {
    const timeout = Math.random() * 10 * 100;
    console.log('running：', index);
	return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`running->done`, index);
            resolve(index);
        }, timeout)
    })
};