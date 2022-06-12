/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rowLen = matrix[0].length
  let len = matrix.length
  if (
    len == 0 ||
    rowLen == 0 ||
    matrix[0][0] > target ||
    matrix[len - 1][rowLen - 1] < target
  ) {
    return false
  }
  // 二分法  先锁定行
  let rowL = 0,
    rowR = len - 1
  let row = -1
  while (rowL <= rowR) {
    let rowCenter = parseInt((rowL + rowR) / 2)
    if (
      target == matrix[rowCenter][0] ||
      target == matrix[rowCenter][rowLen - 1]
    ) {
      return true
    }
    if (
      target > matrix[rowCenter][0] &&
      target < matrix[rowCenter][rowLen - 1]
    ) {
      row = rowCenter
      break
    } else if (target < matrix[rowCenter][0]) {
      rowR--
    } else if (target > matrix[rowCenter][rowLen - 1]) {
      rowL++
    }
  }
  if (row == -1) return false

  // 二分法  在锁定的行中 找目标值
  let left = 0,
    right = rowLen - 1,
    currentRow = matrix[row]

  while (left <= right) {
    let center = parseInt((left + right) / 2)
    if (target == currentRow[center]) {
      return true
    } else if (target > currentRow[center]) {
      left++
    } else if (target < currentRow[center]) {
      right--
    }
  }
  return false
}
// @lc code=end
