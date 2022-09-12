/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序思路之堆排序 不合适
/* var thirdMax = function (nums) {
  let max = -Infinity
  let min = Infinity
  let len = nums.length
  for (let i = 0; i < len; i++) {
    max = Math.max(nums[i], max)
    min = Math.min(nums[i], min)
  }
  let count = 5
  const step = Math.floor((max - min) / count) + 1

  let buckets = new Array(step).fill([])

  for (let i = 0; i < len; i++) {
    buckets[Math.floor((nums[i] - min) / count)].push(nums[i])
  }
  // console.log(buckets)
  let res = []
  for (let i = 0; i < step; i++) {
    buckets[i].sort((a, b) => b - a) //可以使用别的排序
    for (let j = 0; j < buckets[i].length; j++) {
      res.push(buckets[i][j])
    }
  }
  let num = [res[0]]
  for (let i = 1; i < res.length; i++) {
    if (num.length <= 3 && res[i] != num[0]) {
      num.unshift(res[i])
    }
  }
  if (num.length < 3) {
    return res[0]
  }

  return num[0]
} */
var thirdMax = function (nums) {
  let n1 = -Infinity
  let n2 = -Infinity
  let n3 = -Infinity
  for (let i = 0; i < nums.length; i++) {
    n1 = Math.max(nums[i], n1)
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < n1 && nums[i] >= n2) {
      n2 = nums[i]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < n2 && nums[i] >= n3) {
      n3 = nums[i]
    }
  }
  if (n3 === -Infinity) {
    return n1
  }
  return n3
}
// @lc code=end
