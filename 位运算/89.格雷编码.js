/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let res = [0]
  if (n == 0) {
    return res
  }

  for (let i = 1; i <= n; i++) {
    // let temp = res.slice(0).reverse()
    // res = [...res.map(_=>0 <<(i - 1) | _),...temp.map(_=> 1<<(i -1) | _)]
    // res = [...res,...temp.map(_=> 1<<(i -1) | _)]
    let len = res.length
    for (let j = len - 1; j >= 0; j--) {
      res.push(res[j] | (1 << (i - 1)))
    }
  }
  return res
}
// @lc code=end
