/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid == null || grid.length == 0) return 0

  let rows = grid.length,
    cols = grid[0].length
  let res = 0

  //逐行遍历数组中所有元素，是1(陆地)，则开始dfs(遍历其上下左右)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == '1') {
        //是陆地才进行dfs，水域直接跳过
        dfs(grid, i, j) //传入gird和当前所处行列
        //dfs返回说明已经找到一块岛屿的边界了(到数组边界or到水域)，res++
        res++
      }
    }
  }
  return res
}
var dfs = (grid, i, j) => {
  //递归终止条件:越界或者遇到水域
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] == '0' ||
    grid[i][j] == '2'
  )
    return

  grid[i][j] = '2' //把当前所在格子标记为水域(已访问过，避免重复访问)

  //递归其上下左右
  dfs(grid, i - 1, j)
  dfs(grid, i + 1, j)
  dfs(grid, i, j - 1)
  dfs(grid, i, j + 1)
}

// @lc code=end
