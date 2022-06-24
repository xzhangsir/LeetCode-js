/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// 左序遍历
//打印 -》 左边 -》右边
// 中序遍历
//左边 -》 打印 -》右边
// 右序遍历
//左边 -》右边  -》打印
var inorderTraversal = function (root) {
  let res = []
  const func = (root) => {
    if (root.val == null) {
      return
    }
    func(root.left)
    res.push(root.val)
    func(root.right)
  }
  runc(root)
  return res
}
// @lc code=end
