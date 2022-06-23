/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// 单调递增栈  在出栈操作时得到前后边界并计算面积
var largestRectangleArea = function (heights) {
  //这是个栈  里面存的是 heights的下标
  let stack = []
  let res = 0
  let newHeights = [0, ...heights, 0]
  for (let i = 0; i < newHeights.length; i++) {
    while (
      stack.length > 0 &&
      newHeights[i] < newHeights[stack[stack.length - 1]]
    ) {
      //拿到栈顶存的下标
      let index = stack.pop()
      let height = newHeights[index]
      res = Math.max(res, height * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }
  return res
}
// @lc code=end
