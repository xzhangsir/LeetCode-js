/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  //从低位到高位以此相乘 JS 大数运算会出错
 /*  let res = 0
  let len1 = num1.length - 1
  let len2 = num2.length - 1
  for (let i = len1; i >= 0; i--) {
    let carry = 0
    let cols = 0
    for (let j = len2; j >= 0; j--) {
      let jdx = 10 ** (len2 - j)
      cols = (cols % jdx) + num1[i] * num2[j] * jdx + carry * jdx
      carry = parseInt(cols / (jdx * 10))
    }
    let idx = 10 ** (len1 - i)
    res += cols * idx
  }
  return res + '' */
  
  let len1 = num1.length
  let len2 = num2.length
  let res = new Array(len1+len2).fill(0)
  for (let i = len1-1; i >= 0; i--) {
    for (let j = len2-1; j >= 0; j--) {
      let sum = num1[i] * num2[j] + res[i+j+1] 
      res[i+j+1] = sum%10 //计算当前位
      res[i+j] = res[i+j] + parseInt(sum/10) //存储进位数到下一位
    }
  }

  // 循环删 0
  while (res[0] === 0) {
    res.shift();
  }
  return res.length ? res.join('') : '0';
}
// @lc code=end
