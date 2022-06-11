/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let r_len = matrix.length,
    c_len = matrix[0].length
  let rows = new Array(r_len).fill(false),
    cols = new Array(r_len).fill(false)

  for (let i = 0; i < r_len; i++) {
    for (let j = 0; j < c_len; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = cols[j] = true
        //标记行和列 0 的位置
      }
    }
  }

  for (let i = 0; i < r_len; i++) {
    for (let j = 0; j < c_len; j++) {
      //如果行和列被标记 将原数置为空
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}
// @lc code=end
