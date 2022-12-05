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
// 暴力
/* var strStr = function (haystack, needle) {
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
} */
// KMP算法
/**
var strStr = function (haystack, needle) {
  // a b a b a b a b c a         a b a b a b c a
  // 0 1 2 3 4 5 6 7 8 9         0 1 2 3 4 5 6 7
  //     a b a b a b c a
  let next = getPMT(needle)
  // [-1, 0, 0, 1, 2, 3, 4, 0, 1]

  let h = haystack.length
  let n = needle.length
  let j = 0
  let i = 0

  while (i < h && j < n) {
    if (j == -1 || haystack[i] === needle[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }

  if (j === n) return i - j

  return -1
}
function getPMT(pat) {
  const next = Array(pat.length).fill(-1)
  let i = 0
  let j = -1
  // next[0] = -1, next[1] = 0 为固定值；真正的计算从 i = 2 开始；
  while (i < pat.length) {
    if (j === -1 || pat[i] === pat[j]) {
      ++i
      ++j
      next[i] = j
    } else {
      j = next[j]
    }
  }

  return next
}
 */
// 重写KMP算法
var strStr = function (haystack, needle) {
  let table = new Array(needle.length).fill(0)
  {
    let i = 1,
      j = 0
    while (i < needle.length) {
      if (needle[i] === needle[j]) {
        ++i, ++j
        table[i] = j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
    }
    console.log(table)
  }
  {
    let i = 0,
      j = 0
    while (i < haystack.length) {
      if (haystack[i] === needle[j]) {
        ++i, ++j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
      if (j === needle.length) {
        return true
      }
    }
    return false
  }
}
console.log(strStr('aabaaacx', 'aabaaac'))
console.log(strStr('abcdadce', 'abcdabce'))
console.log(strStr('abababcabababc', 'abababc'))
console.log(strStr('abababcabababc', 'ababc'))
console.log(strStr('sadbutsad', 'sad'))
// @lc code=end
