/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  //标记当前格子是否被访问过
  let visited = new Array(m).fill(false).map(() => new Array(n).fill(false))

  // //参数：visited数组、m、n、k、当前所处格子，只往右下走
  return dfs(visited, m, n, k, 0, 0)
}

var dfs = (visited, m, n, k, i, j) => {
  // 终止条件
  if (i >= m || j >= n || bitSum(i) + bitSum(j) > k || visited[i][j]) return 0

  visited[i][j] = true

  //当前格 + 往下走 + 往右走
  return 1 + dfs(visited, m, n, k, i + 1, j) + dfs(visited, m, n, k, i, j + 1)
}

var bitSum = (num) => {
  let sum = 0

  while (num != 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}
