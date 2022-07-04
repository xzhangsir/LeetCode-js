/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (
    obstacleGrid == null ||
    obstacleGrid.length == 0 ||
    obstacleGrid[0][0] == 1
  ) {
    return 0
  }

  let m = obstacleGrid.length,
    n = obstacleGrid[0].length
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0))
  // 将第一列 遇到障碍物之前的 都置为 1
  for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
    res[i][0] = 1
  }
  // 将第一行 遇到障碍物之前的 都置为 1
  for (let j = 1; j < n && obstacleGrid[0][j] == 0; j++) {
    res[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 没有障碍物的位置  上方加左方的和
      if (obstacleGrid[i][j] === 0) {
        res[i][j] = res[i - 1][j] + res[i][j - 1]
      }
    }
  }
  return res[m - 1][n - 1]
}

// @lc code=end
