/**
 * 这个实现是错误的。并发度没有体现出来，并且最后两个请求没有执行到
 * @param {*} url
 * @returns
 */
function request(url) {
  return new Promise((resolve) => {
    const time = Math.random() * 1000;

    console.log(url, time);
    setTimeout(() => resolve(url), time);
  });
}

function multiRequest(urls, maxNum) {
  let requestPool = urls.splice(0, maxNum).map((ele, index) => {
    return request(ele).then((res) => index);
  });

  let pool = Promise.race(requestPool);

  for (let i = 0; i < urls.length; i++) {
    pool = pool.then((index) => {
      console.log('finished', index);
      requestPool[index] = request(urls[i]).then(() => index);
      return Promise.race(requestPool);
    });
  }
  return pool;
}

const urls = [
  "www.example1.com",
  "www.example2.com",
  "www.example3.com",
  "www.example4.com",
  "www.example5.com",
];

const maxNum = 3;
multiRequest(urls, maxNum).then(finalRes => {
  console.log('done', finalRes);
});