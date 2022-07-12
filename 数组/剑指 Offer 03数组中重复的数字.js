/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (obj[num]) return num
    obj[num] = 1
  }
  return -1
}

/* 

var findRepeatNumber = function (nums) {
  let map = new Map()
  for (const num of nums) {
    if (map.has(num)) return num
    map.set(num, 1)
  }
  return -1
} */
