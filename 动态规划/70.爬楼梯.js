/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// fn = f(n-1) + f(n-2)
var climbStairs = function(n) {
    if(n <= 0 ) return 0
    let f1 = 0, f2 = 0, res = 1;
    for(let i = 0 ; i < n ;i++){
        f1 = f2
        f2 = res
        res = f1+f2
    }
    return res
};
// @lc code=end

