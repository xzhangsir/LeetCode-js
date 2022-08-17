/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) {
    return nums
  }
  let res = []

  let queue = []

  for (let right = 0; right < nums.length; right++) {
    //当队列不为空的时候且当前元素>=队尾的元素，则将队尾的元素删除。
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[right]) {
      queue.pop()
    }
    //存储元素的下标
    queue.push(right)
    //计算窗口的左边界
    let left = right - k + 1
    //当队首元素的下标<滑动窗口的左边界时，代表 队首的元素不在滑动窗口内，删除队首元素。
    if (queue[0] < left) {
      queue.shift()
    }
    //因为数组下标从0开始，当右边界+1>=窗口大小时，此时，窗口形成，将队首的元素放入结果。
    if (right + 1 >= k) {
      res.push(nums[queue[0]])
    }
  }
  return res
}
// @lc code=end
