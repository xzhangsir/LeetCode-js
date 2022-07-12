/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let newNum = [...nums1, ...nums2].sort((a, b) => a - b)
  let len = newNum.length
  if (len % 2) {
    return newNum[Math.floor(len / 2)]
  } else {
    return (newNum[len / 2 - 1] + newNum[len / 2]) / 2
  }
}
// @lc code=end
