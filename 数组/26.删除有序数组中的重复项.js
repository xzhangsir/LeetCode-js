/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
    } else {
      i++
    }
  }
  return nums.length
} */

//双指针解法
var removeDuplicates = function (nums) {
  let len = nums.length - 1
  let start = 1
  let run = 0
  while (run < len) {
    if (nums[run] !== nums[run + 1]) {
      nums[start] = nums[run + 1]
      ++start
    }
    ++run
  }
  return start
}
// @lc code=end
