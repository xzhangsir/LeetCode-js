/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
  let res = []
  while (matrix.length > 0) {
    // 先拿数组第一项的 然后剔除第一项的
    res = [...res, ...matrix.shift()]
    if (matrix.length === 0) break
    matrix = reversalArr(matrix)
  }
  return res
}
//对剔除后的 进行逆时针90度旋转
var reversalArr = function (matrix) {
  let arr = []
  for (let i = matrix[0].length - 1; i >= 0; i--) {
    let inArr = []
    for (let j = 0; j < matrix.length; j++) {
      inArr.push(matrix[j][i])
    }
    arr.push(inArr)
  }
  return arr
}
// @lc code=end
