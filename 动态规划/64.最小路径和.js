/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let row = grid.length,
    col = grid[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 && j > 0) {
        // 求第一列每一行的最短路径和
        grid[0][j] += grid[0][j - 1]
      }
      if (j == 0 && i > 0) {
        //求第一行每个点的最短路径和
        grid[i][0] += grid[i - 1][0]
      }
      if (i > 0 && j > 0) {
        // 到(i,j)点的最短路径为：(i,j-1)+(i,j) 或者 (i-1,j)+(i+j) 的最小值
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j])
      }
    }
  }
  return grid[row - 1][col - 1]
}
// @lc code=end
