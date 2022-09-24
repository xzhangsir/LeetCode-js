/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length
  let res = [nums[0]]
  for (let i = 1; i < len; i++) {
    // 如果 res  中最后一个元素都比它小，将它插到最后
    if (nums[i] > res[res.length - 1]) {
      res.push(nums[i])
    } else {
      //用它覆盖掉比它大的元素中 最小的那个
      // 二分
      let left = 0
      let right = res.length - 1

      while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (res[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      res[left] = nums[i]

      // 线性
      // for(let j = 0 ; j < res.length ;j++){
      //     if(res[j] >= nums[i]){
      //         res[j] = nums[i]
      //         break
      //     }
      // }
    }
  }

  return res.length
}
// @lc code=end
