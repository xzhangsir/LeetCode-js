/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  // 暴力
  // let res = []

  // for(let i = 0 ; i < nums.length ;i++){
  //     if(nums[i] % 2){
  //         res.unshift(nums[i])
  //     }else{
  //         res.push(nums[i])
  //     }
  // }

  // return  res

  // 收尾双指针
  // let left  = 0 ,right = nums.length - 1

  // while(left < right){
  //     if(nums[left] % 2 === 0 && nums[right] % 2 === 1){
  //         [nums[right], nums[left]] = [nums[left], nums[right]]
  //     }else if(nums[left] % 2){
  //         left++
  //     }else if(nums[right] % 2 === 0){
  //         right--
  //     }
  // }
  // return nums

  // 快慢指针
  let fast = 0,
    slow = 0,
    len = nums.length - 1

  while (fast <= len) {
    if (nums[fast] & 1) {
      if (fast !== slow) {
        ;[nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      }
      slow++
    }
    fast++
  }
  return nums
}
