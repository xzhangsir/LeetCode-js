/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var singleNumber = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return key
    }
  }
  return null
} */

var singleNumber = function (nums) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  /**
   * entries()
   * 返回一个数组的迭代对象Iterator，该对象包含数组的键值对 (key/value)。
   *
   */

  for (let [key, num] of map.entries()) {
    if (num === 1) {
      return key
    }
  }
  return null
}
// @lc code=end
