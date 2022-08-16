// 模拟请求
function request(url) {
  return new Promise((resolve) => {
    const time = Math.random() * 1000;
    setTimeout(() => resolve(url), time);
  });
}

async function multiRequest(urls, maxNum) {
  const data = urls.map((url, index) => ({ index, url })); // 因为最终要按照顺序输出，所以给每个url追加一个index属性，用于记录在数组中的位置，确保按序输出
  const result = []; // 存放结果的数组
  // 巧用Array.from, length是开辟的数组长度，这个可以控制最大的并发数量。后面回调方法用于存放异步请求的函数
  const promises = Array.from({ length: Math.min(maxNum, data.length) }, () => getChain(data, result));
  // 利用Promise.all并发执行异步函数
  await Promise.all(promises);
  // 通过函数参数接收最终的一个结果
  return result;
}

async function getChain(data, res = []) {
  // 利用队列的思想，一个个pop出来执行，只要urls还有，就继续执行
  while (data.length) {
    const one = data.pop();
    try {
      const urlRes = await request(one.url);
      // 结果按照索引顺序存储
      res[one.index] = urlRes;
    } catch (e) {
      res[one.index] = e;
    }
  }
}
// 调用
const urls = ['www.example1.com', 'www.example2.com', 'www.example3.com', 'www.example4.com', 'www.example5.com'];
multiRequest(urls, 1).then(finalRes => {
  console.log('done', finalRes);
});