/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letter = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z'],
    }
    let res = []
    const dfs = function (str,index) {
        const start = digits[index]
        const arr = letter[start]
        if (!arr) return
        for (let i = 0;i< arr.length;i++) {
            const concatStr = str+arr[i]
            if (concatStr && concatStr.length >= digits.length) res.push(concatStr)
            if (index <= digits.length -2) dfs(concatStr,index+1)
        }
    }
    dfs('',0)
    return res
};

console.log(letterCombinations('245'));

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
