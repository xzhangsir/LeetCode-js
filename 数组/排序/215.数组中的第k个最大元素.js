/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 归并排序超时
var findKthLargest = function (nums, k) {
  function mergeSort(nums) {
    let len = nums.length
    if (len == 1) return nums

    let center = Math.floor(len / 2)
    let left = nums.slice(0, center)
    let right = nums.slice(center)

    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left, right) {
    let res = []

    while (left.length && right.length) {
      /* if (left[0] <= right[0]) {
        res.push(left.shift())
      } else {
        res.push(right.shift())
      } */
      if (left[0] <= right[0]) {
        res.push(right.shift())
      } else {
        res.push(left.shift())
      }
    }
    while (left.length) res.push(left.shift())

    while (right.length) res.push(right.shift())
    return res
  }

  return mergeSort(nums)[k - 1]
}
// @lc code=end
