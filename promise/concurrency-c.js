function request(url) {
  return new Promise((resolve) => {
    const time = Math.random() * 1000;
    setTimeout(() => resolve(url), time);
  });
}
function multiRequest(urls, maxNums) {
    let i = 0;
    const ret = [];
    const execting = [];
    const enqueue = () => {
        if(i === urls.length) {
            return Promise.resolve();
        }
        const item = urls[i++];
        const p = Promise.resolve().then(() => request(item));
        ret.push(p);
        const e = p.then(() => execting.splice(execting.indexOf(e), 1));
        execting.push(e);
        let r = Promise.resolve();
        if(execting.length >= maxNums) {
            r = Promise.race(execting);
        }
        return r.then(() => enqueue());
    }

    return enqueue().then(() => Promise.all(ret));
}

const urls = ['www.example1.com', 'www.example2.com', 'www.example3.com', 'www.example4.com', 'www.example5.com']

const maxNum = 3;
const a = multiRequest(urls, maxNum);
a.then((res) => {
    console.log(res);
})
console.log('a', a);