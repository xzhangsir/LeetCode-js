/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 暴力算法
/* var findNumberIn2DArray = function (matrix, target) {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return false
  }
  let rowLen = matrix.length,
    colLen = matrix[0].length
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] === target) {
        return true
      }
    }
  }
  return false
}
 */
// 线性查找  从右上角开始

var findNumberIn2DArray = function (matrix, target) {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return false
  }

  let rowLen = matrix.length,
    colLen = matrix[0].length,
    row = 0,
    col = colLen - 1

  while (row < rowLen && col >= 0) {
    let val = matrix[row][col]
    if (val === target) {
      return true
    } else if (val < target) {
      row++
    } else if (val > target) {
      col--
    }
  }
  return false
}
