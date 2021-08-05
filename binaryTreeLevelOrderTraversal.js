// Leetcode 102

// 二叉树的层序遍历

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    if (!root) {
        return res;
    }

    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const n = queue.length;
        const temp = [];
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            temp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        res.push(temp.slice());
    }

    return res;
};