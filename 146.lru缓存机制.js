/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    console.log(capacity);
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let indexOf = this.stack.indexOf(key)
    if(indexOf !== -1 ) {
        let i = this.stack.splice(indexOf,1)
        this.stack.push(i)
        return this.map.get(i)
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) { 
    if(this.capacity == this.stack.length) {
        this.stack.pop()
        this.stack.push(key)
    } else {
        this.stack.push(key)
    }
    this.map.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

