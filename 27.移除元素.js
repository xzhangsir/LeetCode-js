/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  return nums.length
} */
// 双指针解法 只算出了长度
var removeElement = function (nums, val) {
  let len = nums.length
  let start = 0 //保留不等于val的值的数组
  let run = 0 // 不断的前进，判断剔除等于val的值。

  while (len > run) {
    if (nums[run] !== val) {
      nums[start] = nums[run]
      start++
    }
    run++
  }
  return start
}

// @lc code=end
