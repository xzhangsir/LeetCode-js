/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 左右指针
var reverseString = function (s) {
  let len = s.length - 1
  for (let left = 0, right = len; left < right; ++left, --right) {
    ;[s[left], s[right]] = [s[right], s[left]]
  }
}
// @lc code=end
