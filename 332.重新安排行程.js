/**
 * @param {string[][]} tickets
 * @return {string[]}
 * 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 */
const findItinerary = (tickets) => {
    const res = ['JFK']; // 初始放入起点'JFK'
    const map = {};      // 邻接表

    for (const ticket of tickets) { // 建表
        const [from, to] = ticket;
        if (!map[from]) {
            map[from] = [];
        }
        map[from].push(to);
    }

    for (const city in map) { // 每个城市的list按照字母顺序排序一下
        map[city].sort();
    }

    const dfs = (node, used) => { // node是当前访问的城市 used是已经用掉的机票数
        if (used == tickets.length) { // 遍历完所有“边”，返回true
            return true;
        };
        const nextNodes = map[node]; // 当前城市的所有邻接城市
        if (!nextNodes || nextNodes.length==0) { // 没有邻接城市了
            return false; // 还没用光机票的情况下，没有去下一站的机票了，走不了，返回false
        }
        for (let i = 0; i < nextNodes.length; i++) { // 设置出多个选择（递归分支）
            const next = nextNodes[i]; // 当前选择的下一站
            nextNodes.splice(i, 1);    // 更新一下邻接表，飞出地的list中删掉这一站
            res.push(next);            // 选择的这一站推入res
            if (dfs(next, used + 1)) { // 在这个递归分支中能找到一个用完所有机票的路径
                return true;
            }                             // 在这个分支中没找到，回溯
            nextNodes.splice(i, 0, next); // list删掉的这一站恢复回来
            res.pop();                    // res中推入的选择，也撤销
        }
    };

    dfs('JFK', 0); // 从'JFK'城市开始遍历，当前用掉0张机票
    return res;
};

// let tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// let tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// let tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
let tickets = [["EZE","TIA"],["EZE","HBA"],["AXA","TIA"],["JFK","AXA"],["ANU","JFK"],["ADL","ANU"],["TIA","AUA"],["ANU","AUA"],["ADL","EZE"],["ADL","EZE"],["EZE","ADL"],["AXA","EZE"],["AUA","AXA"],["JFK","AXA"],["AXA","AUA"],["AUA","ADL"],["ANU","EZE"],["TIA","ADL"],["EZE","ANU"],["AUA","ANU"]]
console.log(findItinerary(tickets));
//[["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
//["JFK","NRT","JFK","KUL"]

//
// [["EZE","TIA"],["EZE","HBA"],["AXA","TIA"],["JFK","AXA"],["ANU","JFK"],["ADL","ANU"],["TIA","AUA"],["ANU","AUA"],["ADL","EZE"],["ADL","EZE"],["EZE","ADL"],["AXA","EZE"],["AUA","AXA"],["JFK","AXA"],["AXA","AUA"],["AUA","ADL"],["ANU","EZE"],["TIA","ADL"],["EZE","ANU"],["AUA","ANU"]]
// ["JFK","AXA","AUA","ADL","ANU","AUA","ANU","EZE","ADL","EZE","ANU","JFK","AXA","EZE","TIA","AUA","AXA","TIA","ADL","EZE","HBA"]

// 输入: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// 输出: ["JFK", "MUC", "LHR", "SFO", "SJC"]


// 输入: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// 输出: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// 解释: 另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"]。但是它自然排序更大更靠后
