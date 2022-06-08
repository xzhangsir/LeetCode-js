/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 每一行 每一列 每一个3*3 box 标记为1  大于1证明重复出现 返回false
var isValidSudoku = function (board) {
  // 二维数组 每一行
  let rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
  // 二维数组 每一列
  let cols = new Array(9).fill(0).map(() => new Array(9).fill(0))
  //  三维数组 每一box  3*3
  let box = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cur = board[i][j]
      if (cur !== '.') {
        let index = cur * 1 - 1
        rows[i][index]++
        cols[j][index]++
        box[parseInt(i / 3)][parseInt(j / 3)][index]++
        if (
          rows[i][index] > 1 ||
          cols[j][index] > 1 ||
          box[parseInt(i / 3)][parseInt(j / 3)][index] > 1
        ) {
          return false
        }
      }
    }
  }
  return true
}
// @lc code=end
