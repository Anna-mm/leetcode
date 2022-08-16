// 模拟请求
function request(url) {
    return new Promise((resolve) => {
      const time = Math.random() * 1000;
      setTimeout(() => resolve(url), time);
    });
  }


  function multiRequest(urls = [], maxNum) {
      const len = urls.length
      const result = new Array(len)

      let count = 0

      return new Promise((resolve, reject) => {
          if (count < maxNum) {
              goNext()
          }

          function goNext() {
            let cur = count++
            console.log('cur', cur, urls[cur])
            if (cur >= len) {
              resolve(result)
            } else {
              const _url = urls[cur]
              console.log(_url)
              request(_url).then(res => {
                  result[cur] = res
                  if (cur < len) {
                      goNext()
                  }
              }).catch(err => {
                  console.log(err)
                result[cur] = err
                if (cur < length) {
                  goNext()
                }
              })
            }

      }
      })


  }

  const urls = ['www.example1.com', 'www.example2.com', 'www.example3.com', 'www.example4.com', 'www.example5.com']

  multiRequest(urls, 3).then(finalRes => {
      console.log('done', finalRes);
  });


