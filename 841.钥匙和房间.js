/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let set = []
    let cur = new Set([0])
    rooms.length?set.push(...rooms[0]) :''
    while (set.length) {
        let stackSet = [...set]
        set = []
        for (const v of stackSet) {
            if (!cur.has(v)) {
                set.push(...rooms[v])
                cur.add(v)
            }
        }
    }
    return Array.from(cur).length === rooms.length
};
// @lc code=end

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));
