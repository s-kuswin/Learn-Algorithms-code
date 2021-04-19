/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    const hours = [1,2,4,8]
    const mins = [1,2,4,8,16,32]
    let arr = []

    const dfs = function(h,m,index) {
        if(index == num && h<=11 && m <= 59) {
            const str = h + ':'+ m >= 10 ? m : `0${m}`
            arr.push(str)
        }
        for(const v of hours) {
            dfs(h+v,m,index+1)
        }

    }

    dfs(0,0,0)

};
// @lc code=end

