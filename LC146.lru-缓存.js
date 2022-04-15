
// 方案二：用 map 结构，map 可以保证顺序的
// 可以巧妙的是如何用 next() 找到 map 的第一个key：this.cache.keys().next().value
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 如果关键字 key 已经存在，移动到栈顶。
    if(this.cache.has(key)){
        let value = this.cache.get(key);
        this.cache.delete(key); // 删除后，再 set ，相当于更新到 cache 最后一位
        this.cache.set(key, value);
        return value;
    }
    return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果关键字 key 已经存在，则变更其数据值 value. 然后移动到栈顶
    if(this.cache.has(key)){
        this.cache.delete(key);
        this.cache.set(key, value)
        return;
    }

    // 如果关键字 key 不存在，没有空间的话将最早元素删除
    if (this.capacity - this.cache.size <= 0) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey)
    }
    this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


// 方案一：用 array 超出时间限制

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.cache = [];
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 判断 key 是否存在
    const targetIndex = this.cache.findIndex(v => v[0] === key);

    // 如果关键字 key 已经存在，移动到栈顶。
    if (targetIndex !== -1) {
        const value = this.cache[targetIndex][1];
        // 每次获取之后把其删除, 再放到栈顶
        this.cache.splice(targetIndex, 1)
        this.cache.push([key, value]);
        return value
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 判断 key 是否存在
    const targetIndex = this.cache.findIndex(v => v[0] === key);

    // 如果关键字 key 已经存在，则变更其数据值 value. 然后移动到栈顶
    if (targetIndex !== -1) {
        this.cache[targetIndex][1] = value;
        this.cache.splice(targetIndex, 1)
        this.cache.push([key, value]);
        return;
    }
    // 如果关键字 key 不存在，没有空间的话将最早元素删除
    if (this.capacity - this.cache.length <= 0) {
        this.cache.splice(0, 1);
    }
    this.cache.push([key, value]);
};

