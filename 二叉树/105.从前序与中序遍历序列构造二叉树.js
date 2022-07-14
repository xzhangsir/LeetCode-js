/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null
  // preorder 前序   根左右
  // inorder 中序    左根右
  // 先更具前序拿到  根节点  再通过中序 区分左子树和右子树

  const root = new TreeNode(preorder[0])

  // 从中序中找到 区别  左右子树的 根节点的位置
  let rootIndex = inorder.findIndex((item) => item === preorder[0])

  if (rootIndex === -1) return null

  preorder.shift()
  // 递归
  root.left = buildTree(preorder, inorder.slice(0, rootIndex))
  root.right = buildTree(preorder, inorder.slice(rootIndex + 1))
  return root
}
// @lc code=end
