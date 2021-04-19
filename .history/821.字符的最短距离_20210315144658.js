/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let res = []
    let indexArr = []
    for(let i = 0; i < s.length;i++) {
        if(s[i] == c) {
            indexArr.push(i)
        }
    }

    for(let i = o; i< s.length;i++) {
        let leng = 0
        if(s[i] == c) {
            res.push(0)
            continue;
        }
        for(const v of indexArr) {
            
            i = Math.abs(v - i) > i ? i : 
        }
        
    }

};
// @lc code=end

