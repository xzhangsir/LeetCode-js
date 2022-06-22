/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// G(n)=G(0)∗G(n−1)+G(1)∗(n−2)+...+G(n−1)∗G(0)  满足 卡特兰数
var numTrees = function (n) {
  let res = new Array(n + 1).fill(0)
  res[0] = 1
  res[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      res[i] += res[j - 1] * res[i - j]
    }
  }
  return res[n]
}
// @lc code=end
