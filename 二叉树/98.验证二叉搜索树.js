/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
//中序遍历
var isValidBST = function (root) {
  let pre = Number.MIN_SAFE_INTEGER //存上一个节点，初始化为最小值
  const func = (root) => {
    //递归边界
    if (root == null) return true
    // 判断当前节点的左子树是否满足二叉搜索树，如果不满足，直接返回false，无序递归右子树
    if (!func(root.left)) return false
    // 前一个节点 大于等于 当前的节点，直接返回false
    if (pre >= root.val) return false
    // 否则，将当前节点设置为pre
    pre = root.val
    return func(root.right)
  }
  return func(root)
}
// @lc code=end
