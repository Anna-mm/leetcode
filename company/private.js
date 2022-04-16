// 私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装。
// 但 ES6 不提供，只能通过变通方法模拟实现。

// 方案一：命名约定
// class Widget {
//     // 公有方法
//     foo (baz) {
//       this._bar(baz);
//     }
//     // 私有方法
//     _bar(baz) {
//       return this.snaf = baz;
//     }
// }

// 方案二：移出类
// class Widget {
//     foo (baz) {
//       bar.call(this, baz);
//     }
// }

// function bar(baz) {
//     return this.snaf = baz;
// }

// 方案三：还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
// const bar = Symbol('bar');
// const snaf = Symbol('snaf');

// export default class myClass{

//   // 公有方法
//   foo(baz) {
//     this[bar](baz);
//   }

//   // 私有方法
//   [bar](baz) {
//     return this[snaf] = baz;
//   }
// };

// 方案四：用 get set 拦截一下
class AA {
   	// #privateValue = 42;
	constructor(x, y) {
    }

    get x() {
        throw new Error('private property not allowed')
        // return 'xxx';
    }
    set x(value) {
        this.x = value;
    }
}

const aa = new AA(1,2);
console.log(aa);
console.log(aa.x);

// 方案五：有种提案属性名之前，使用#表示。

class IncreasingCounter {
    #count = 0;
    get value() {
      console.log('Getting the current value!');
      return this.#count;
    }
    increment() {
      this.#count++;
    }
}
const counter = new IncreasingCounter();
counter.#count // 报错
counter.#count = 42 // 报错