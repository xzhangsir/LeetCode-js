/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums
    .sort((a, b) => {
      if (`${a}${b}` - `${b}${a}` > 0) {
        return 1 // b 就会在 a的前面
      } else {
        return -1
      }
    })
    .join('')
}
