/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //先按照 第一位升序排序
  let valAsc = intervals.sort((a, b) => a[0] - b[0])
  let maxEnd = valAsc[0][1] //区间最后一位的最大值
  let start = 0 //区间第一位的起始位置下标
  let res = []

  for (let i = 1; i < valAsc.length; i++) {
    if (maxEnd >= valAsc[i][0]) {
      maxEnd = Math.max(maxEnd, valAsc[i][1])
    } else {
      res.push([valAsc[start][0], maxEnd])
      start = i
      maxEnd = valAsc[start][1]
    }
  }
  res.push([valAsc[start][0], maxEnd])
  return res
}
// @lc code=end
