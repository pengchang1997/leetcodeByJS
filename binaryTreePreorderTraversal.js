// Leetcode 144

// 二叉树的前序遍历

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = [];
    if (!root) {
        return res;
    }

    let pointer = root;
    const stack = [];
    while (pointer || stack.length) {
        if (pointer) {
            res.push(pointer.val);
            stack.push(pointer);
            pointer = pointer.left;
        } else {
            let top = stack.pop();
            pointer = top.right;
        }
    }

    return res;
};