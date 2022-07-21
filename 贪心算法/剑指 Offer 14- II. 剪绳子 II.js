/**
 * @param {number} n
 * @return {number}
 */
//尽可能把绳子分成长度为3的小段，这样乘积最大

var cuttingRope = function (n) {
  if (n < 4) return n - 1
  let res = 1
  while (n > 4) {
    res = (res * 3) % 1000000007
    n -= 3
  }

  return (res * n) % 1000000007
}
