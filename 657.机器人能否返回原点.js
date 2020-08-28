/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean} 循环
 */
var judgeCircle = function(moves) {
    let x = 0 , y = 0
    for(const v of moves) {
        v === 'R' ? x-- : v === 'L'? x++ : v === 'U' ? y++ : v === 'D' ? y-- :''
    }
    return !x && !y
};

// @lc code=end

console.log(judgeCircle("UDDDDRRRLLL"));

/**
 * @author kuswin
 * @date 2020-8-28
 * @Description: 思路很好
*/
// var judgeCircle = function(moves) {
//     return moves.split('L').length === moves.split('R').length && moves.split('U').length === moves.split('D').length
// };
