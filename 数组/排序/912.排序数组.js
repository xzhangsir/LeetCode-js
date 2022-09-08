/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 计数排序
var sortArray = function (nums) {
  let obj = {}
  let _obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      obj[nums[i]] = (obj[nums[i]] || 0) + 1
    } else {
      _obj[-nums[i]] = (_obj[-nums[i]] || 0) + 1
    }
  }
  let res = []
  for (let key in _obj) {
    while (_obj[key]) {
      _obj[key]--
      res.unshift(-key)
    }
  }
  for (let key in obj) {
    while (obj[key]) {
      obj[key]--
      res.push(+key)
    }
  }
  return res
}
// 冒泡
/* var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }
  return nums
} */
// @lc code=end
