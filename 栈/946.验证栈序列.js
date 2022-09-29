/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = []
  let len = pushed.length
  for (let i = 0, j = 0; i < len; i++) {
    stack.push(pushed[i])
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
  }
  return stack.length === 0
}
// @lc code=end
