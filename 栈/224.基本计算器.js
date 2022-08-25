/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [1] //存符号 1正 -1负
  let num = 0,
    option = 1,
    res = 0 //option 当前的符号
  for (let i = 0; i < s.length; i++) {
    if (/\d+/.test(s[i])) {
      // //取出完整数值
      num = num * 10 + s[i] * 1
      continue
    }
    res = res + num * option //计算一个运算符
    num = 0

    if (s[i] === '(') {
      //进入左括号，把左括号之前的符号置于栈顶
      stack.push(option)
    } else if (s[i] === ')') {
      //退出括号，弹出栈顶符号
      option = stack.pop()
    } else if (s[i] === '+') {
      option = stack[stack.length - 1]
    } else if (s[i] === '-') {
      option = -stack[stack.length - 1]
    }
  }

  res = res + option * num
  return res
}
// @lc code=end
