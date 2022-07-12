/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
// 始终按照 从左到右 从上到下 从右到左 从下到上 填入顺序循环
var generateMatrix = function (n) {
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1
  let total = n * n,
    num = 0
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))

  while (total > num) {
    for (let i = left; i <= right; i++) res[top][i] = ++num
    top++
    for (let i = top; i <= bottom; i++) res[i][right] = ++num
    right--
    for (let i = right; i >= left; i--) res[bottom][i] = ++num
    bottom--
    for (let i = bottom; i >= top; i--) res[i][left] = ++num
    left++
  }
  return res
}
// @lc code=end
