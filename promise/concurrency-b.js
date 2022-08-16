function request(url, index) {
    return new Promise((resolve) => {
      const time = Math.random() * 1000;
      setTimeout(() => resolve({index, url}), time);
    });
  }

  function multiRequest(urls, maxNum) {
      var res = [], num = 0, n = urls.length, index = -1;
      return new Promise((resolve, rej) => {
          function req() {
              while(num <= maxNum && urls.length) {
                  index +=1;
                  request(urls.shift(), index)
                      .then(data => {
                          num -= 1;
                          res[data.index] = data.url;
                          req();
                      })
                      .finally(() => {
                          if (Object.keys(res).length === n) {
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
   3).then((data) => console.log('done', data));