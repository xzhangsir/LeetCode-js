/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 先排除 不在数组范围内的情况
  if (nums[0] > target) {
    return 0
  } else if (nums[nums.length - 1] < target) {
    return nums.length
  }
  // 二分查找

  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    let center = parseInt((left + right) / 2)

    if (target == nums[center]) {
      return center
    }

    if (nums[center] < target) {
      left = center + 1
    } else {
      right = center - 1
    }
  }
  return left
}
// @lc code=end
