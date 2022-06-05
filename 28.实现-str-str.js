/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let nlen = needle.length
  let hlen = haystack.length
  if (nlen == 0) return 0
  if (hlen < nlen) return -1

  for (let i = 0; i <= hlen - nlen; i++) {
    for (let j = 0; j < nlen; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      }
      if (j == nlen - 1) return i
    }
  }
  return -1
}
// @lc code=end
