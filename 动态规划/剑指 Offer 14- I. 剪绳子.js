/**
 * @param {number} n
 * @return {number}
 */
/**
 * 
 * 
 *  1我们想要求长度为n的绳子剪掉后的最大乘积，可以从前面比n小的绳子转移而来
    2用一个temp数组记录从0到n长度的绳子剪掉后的最大乘积，也就是temp[i]表示长度为i的绳子剪成m段后的最大乘积，初始化temp[2] = 1
    3我们先把绳子剪掉第一段（长度为j），如果只剪掉长度为1，对最后的乘积无任何增益，所以从长度为2开始剪
    4剪了第一段后，剩下(i - j)长度可以剪也可以不剪。如果不剪的话长度乘积即为j * (i - j)；如果剪的话长度乘积即为j * temp[i - j]。取两者最大值max(j * (i - j), j * temp[i - j])
    5第一段长度j可以取的区间为[2,i)，对所有j不同的情况取最大值，因此最终temp[i]的转移方程为
    temp[i] = max(temp[i], max(j * (i - j), j * temp[i - j]))
    6最后返回temp[n]即可
*/
var cuttingRope = function (n) {
  let temp = new Array(n + 1).fill(0)
  temp[2] = 1
  temp[3] = 2

  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      temp[i] = Math.max(temp[i], Math.max(j * (i - j), j * temp[i - j]))
    }
  }
  return temp[n]
}
