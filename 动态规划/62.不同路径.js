/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//动态规划
//只能向右和向下移动
var uniquePaths = function (m, n) {
  let grid = new Array(m).fill(0).map(() => new Array(n).fill(0))
  //第一列置 1
  for (let i = 0; i < m; i++) {
    grid[i][0] = 1
  }
  //第一行置 1
  for (let i = 0; i < n; i++) {
    grid[0][i] = 1
  }
  //两个for循环推导，对于(i,j)来说，只能由上方(i-1,j)或者左方(i,j-1)过来
  //所以走到当前位置(i,j)所需要的步数就是：上方加左方的和
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
    }
  }
  return grid[m - 1][n - 1]
}
// @lc code=end
