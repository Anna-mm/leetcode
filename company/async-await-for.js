const fruitsToGet = ['apple', 'grape', 'pear'];

const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14
}

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const getNumFruit = fruit => {
    return sleep(1000).then(v => {
        // console.log('after sleep', fruitBasket[fruit]);
        return fruitBasket[fruit];
    })
}

const forLoop = async _ => {
    console.log('Start')

    // for 中的 await 是串行执行的
    // while、for-of 也是同样的行为

    // 如果不用 await 呢？那 console.log('End') 就不是真正的结束了。
    for (let index = 0; index < fruitsToGet.length; index++) {
        const fruit = fruitsToGet[index]
        const numFruit = await getNumFruit(fruit)
        console.log(numFruit)
    }

    console.log('End')
}

// for each 中并不能使用 await ，使用了也不管用。
const forEachLoop = _ => {
    console.log('Start')

    fruitsToGet.forEach(async fruit => {
      const numFruit = await getNumFruit(fruit)
      console.log(numFruit)
    })

    console.log('End')
}

const mapLoop = async _ => {
    console.log('Start')

    const promises = fruitsToGet.map(async fruit => {
      const numFruit = await getNumFruit(fruit)
      return numFruit
    })

    const numFruits = await Promise.all(promises)
    console.log(numFruits)

    console.log('End')
}

forLoop();
forEachLoop();
mapLoop();