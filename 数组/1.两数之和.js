/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /*  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  } */

  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let n = target - nums[i]
    if (n in obj) {
      return [i, obj[n]]
    }
    obj[nums[i]] = i
  }
  /*  const len = nums.length
  while (true) {
    i = Math.floor(Math.random() * len)
    j = Math.floor(Math.random() * len)
    if (i !== j && nums[i] + nums[j] === target) {
      return [i, j]
    }
  } */
}
// @lc code=end
