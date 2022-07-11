/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 二维数组 回溯
var exist = function (board, word) {
  let rowLen = board.length,
    colsLen = board[0].length,
    WLen = word.length,
    used = new Array(rowLen)
      .fill(false)
      .map(() => new Array(colsLen).fill(false))

  const canFind = (row, col, i) => {
    // row和col为当前点的坐标，i当前考察的word字符索引
    // 递归的出口 i === WLen
    if (i === WLen) {
      return true
    }
    // 当前的点越界了 就返回false
    if (row < 0 || row >= rowLen || col < 0 || col >= colsLen) {
      return false
    }
    // 当前的节点 已经被访问过了   或者不是目标节点
    if (used[row][col] || board[row][col] != word[i]) {
      return false
    }

    // 标记节点 被访问过
    used[row][col] = true

    //基于当前选择的点[row,col]，通过查找 【上下左右】节点，看能否找到剩余字符的路径。
    const canFindRest =
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1) ||
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1)
    if (canFindRest) return true

    // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态
    used[row][col] = false
    return false
  }

  // 先遍历找起点，作为递归入口
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colsLen; j++) {
      if (board[i][j] == word[0] && canFind(i, j, 0)) {
        return true
      }
    }
  }
  return false
}
// @lc code=end
