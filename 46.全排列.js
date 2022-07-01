/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯法
var permute = function (nums) {
  let len = nums.length
  if (len === 0) return []
  //标记是否被遍历过
  let used = new Array(len).fill(false)
  // 遍历的层级
  let depth = 0
  //路径
  let path = []
  let res = []
  const dfs = (nums, len, depth, path, used, res) => {
    if (len === depth) {
      res.push([...path])
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true
      depth += 1
      dfs(nums, len, depth, path, used, res)
      //回溯
      depth -= 1
      path.pop()
      used[i] = false
    }
  }
  dfs(nums, len, depth, path, used, res)
  return res
}
// @lc code=end
