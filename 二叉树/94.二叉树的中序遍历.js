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
    if (root == null) {
      return
    }
    func(root.left)
    res.push(root.val)
    func(root.right)
  }
  func(root)
  return res
}

// 前序遍历
/* var preorderTraversal = function (root) {
  let res = []

  const func = (root) => {
    if (root == null) {
      return
    }
    res.push(root.val)
    func(root.left)
    func(root.right)
  }

  func(root)
  return res
} */

// 后序遍历
/* var postorderTraversal = function (root) {
  let res = []

  const func = (root) => {
    if (root == null) {
      return
    }
    func(root.left)
    func(root.right)
    res.push(root.val)
  }
  func(root)
  return res
} */
// @lc code=end
