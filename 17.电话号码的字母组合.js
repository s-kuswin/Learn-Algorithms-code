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
    const dfs = function (start,str,index) {
        const arr = letter[start]
        if (arr) {
            for (let i = 0;i< arr.length;i++) {
                str += arr[i]
                if (str && str.length >= digits.length) res.push(str)
                if (index <= digits.length -2) dfs(digits[index+1],str,index+1)
                str = str.substring(0,str.length-1)
            }
        }
    }
    dfs(digits[0],'',0)
    return res
};

console.log(letterCombinations('245'));

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
