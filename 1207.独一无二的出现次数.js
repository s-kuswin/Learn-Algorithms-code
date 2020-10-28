/**
 * @param {number[]} arr
 * @return {boolean} ease方法，，内存多，时间88%多
 */
var uniqueOccurrences = function(arr) {
    const newArr = new Set(arr)
    let num = []
    for(const v of newArr) {
        let count = 0
        for(const i of arr) {
            if(v == i) count++
        }
        if(num.indexOf(count) !== -1) return false
        num.push(count)
    }
    return true
};

/**
 *精简法  ，并不比上面的时间短
 */

var uniqueOccurrences = function(arr) {
    let obj = {}
    for(const v of arr) {
        obj[v] = obj[v] ? obj[v] + 1 : 1
    }

    return Object.keys(obj).length === new Set(Object.values(obj)).size
};