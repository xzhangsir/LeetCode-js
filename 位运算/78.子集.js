/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 二进制左移
var subsets = function (nums) {
  let res = [],
    len = nums.length
  for (let i = 0; i < 1 << len; i++) {
    let temp = []
    for (let j = 0; j < len; j++) {
      if (i & (1 << j)) {
        temp.push(nums[j])
      }
    }
    res.push(temp)
  }
  return res
}
// @lc code=end
