
// 模拟请求
function request(url, index) {
    return new Promise((resolve) => {
      const time = Math.random() * 1000;
      setTimeout(() => resolve(url), time);
    });
  }

  function multiRequest(urls, maxNum) {
      var res = {}, num = 0, n = urls.length, index = -1;
      return new Promise((resolve, rej) => {
          function req() {
              while(num <= maxNum && urls.length) {
                  index +=1;
                  let url = urls.shift();
                  res[url] = '';
                  request(url, index)
                      .then(data => {
                          num -= 1;
                        res[url] = data;
                          req();
                      })
                      .finally(() => {
                        let hasrunning = Object.values(res).findIndex(v => v === '');
                        if (hasrunning === -1) {
                            resolve(res);
                        }
                      })
                  }
                  num += 1;
              }
          req();
      })
  };

  multiRequest(['www.example1.com',
   'www.example2.com',
   'www.example3.com',
   'www.example4.com',
   'www.example5.com'],
   3).then((data) => console.log(data));
