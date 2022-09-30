/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let m = g.length
  let n = s.length
  let res = 0
  for (let i = 0, j = 0; i < m && j < n; i++, j++) {
    //g[i]是当前需要满足的孩子的胃口
    //s[j]是当前饼干的大小
    while (j < n && g[i] > s[j]) {
      //如果当前饼干的大小小于孩子的胃口，那么就换一块更大的饼干，如此一直更新饼干的大小，但是需要注意的是饼干不能越界
      j++
    }
    if (j < n) {
      res++
    }
  }
  return res
}
// @lc code=end
