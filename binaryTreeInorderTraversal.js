// Leetcode 94

// 二叉树的中序遍历

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
var inorderTraversal = function(root) {
    const res = [];
    if (!root) {
        return res;
    }

    const stack = [];
    let pointer = root;
    while (pointer || stack.length) {
        if (pointer) {
            stack.push(pointer);
            pointer = pointer.left;
        } else {
            let top = stack.pop();
            res.push(top.val);
            pointer = top.right;
        }
    }

    return res;
};