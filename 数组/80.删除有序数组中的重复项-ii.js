/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var removeDuplicates = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let num = obj[nums[i]]
    if (num) {
      if (num === 2) {
        nums.splice(i, 1)
        i--
      } else {
        obj[nums[i]] += 1
      }
    } else {
      obj[nums[i]] = 1
    }
  }
  return nums.length
} */
// 快慢指针
var removeDuplicates = function (nums) {
  const RM = 2 // 最大重复次数
  let slow = 0 // 慢指针 - 写
  // fast 快指针 - 读
  for (let fast in nums) {
    // 快指针移动
    if (nums[fast] != nums[slow - RM]) {
      nums[slow] = nums[fast] // 慢指针写入数据
      slow++ // 慢指针移动
    }
  }
  return slow
}
// @lc code=end
