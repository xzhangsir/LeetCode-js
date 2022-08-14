/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let queue = []
  let len = digits.length
  if (len === 0) return queue
  queue.push('')
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  for (let i = 0; i < len; i++) {
    //循环数字的每个字符
    let src = map[digits[i]]
    let levelSize = queue.length //当前层的节点个数
    for (let q = 0; q < levelSize; q++) {
      let curSrc = queue.shift() //当前层的字符串
      for (let j = 0; j < src.length; j++) {
        queue.push(curSrc + src[j])
      }
    }
  }
  return queue
}
// @lc code=end
