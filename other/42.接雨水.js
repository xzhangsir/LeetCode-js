/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 先正向遍历一遍，找到左侧最大高度，再反向遍历，找到右侧最大高度。
// 然后将两侧高度比较，取小的，再减去当前位置的高度，就是当前单位蓄水量。
var trap = function (height) {
  let len = height.length
  let left = [height[0]]
  let right = []

  for (let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], height[i])
  }
  right[len - 1] = height[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i])
  }

  let res = 0
  for (let i = 0; i < len; i++) {
    res += Math.min(left[i], right[i]) - height[i]
  }
  return res
}
// @lc code=end
