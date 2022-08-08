/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//map
/* var containsDuplicate = function(nums) {
    let obj = {}
    for(let i = 0 ; i < nums.length ; i++){
        obj[nums[i]] = (obj[nums[i]] || 0 ) + 1
        if(obj[nums[i]] == 2){
            return true
            break
        }
    }
    return false

}; */
// 暴力
/* var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};
 */
// set
var containsDuplicate = function (nums) {
  let set = new Set()
  let len = nums.length
  for (let i = 0; i < len; i++) {
    set.add(nums[i])
  }
  return set.size < len
}
// @lc code=end
