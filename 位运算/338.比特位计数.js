/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function (n) {
  // 奇数：二进制表示中，奇数一定比前面那个偶数多一个 1，因为多的就是最低位的 1。
  // 偶数：二进制表示中，偶数中 1 的个数一定和除以 2 之后的那个数一样多。因为最低位是 0，除以 2 就是右移一位，也就是把那个 0 抹掉而已，所以 1 的个数是不变的。

  let res = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    // 除以 2 就是右移一位
    // & 1 就是看最后一位是不是1
    res[i] = res[i >> 1] + (i & 1)
  }
  return res
}
// @lc code=end
