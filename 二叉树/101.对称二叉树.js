/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//递归
var isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  const func = (L, R) => {
    //递归的终止条件是：
    //  两个节点都为空
    //  或者两个节点中有一个为空
    //  或者两个节点的值不相等
    if (L == null && R == null) return true
    if (L == null || R == null) return false
    if (L.val !== R.val) return false
    //再递归的比较 左节点的左孩子 和 右节点的右孩子
    //以及比较  左节点的右孩子 和 右节点的左孩子
    return func(L.left, R.right) && func(L.right, R.left)
  }
  //调用递归函数，比较左节点，右节点
  return func(root.left, root.right)
}
// @lc code=end
