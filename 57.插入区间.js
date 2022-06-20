/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [left, right] = newInterval
  let res = []
  let flag = false
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > right) {
      //需要插入的区间在左边
      if (!flag) {
        res.push([left, right])
        flag = true
      }
      res.push([intervals[i][0], intervals[i][1]])
    } else if (intervals[i][1] < left) {
      //需要插入的区间在右边
      res.push([intervals[i][0], intervals[i][1]])
    } else {
      // 和插入区间有交集  算出并集
      left = Math.min(left, intervals[i][0])
      right = Math.max(right, intervals[i][1])
    }
  }
  if (!flag) {
    res.push([left, right])
  }
  return res

  // 方法二：直接调用合并区间的方法
  // return merge([...intervals, newInterval])
}

/* var merge = function (intervals) {
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
} */
// @lc code=end
