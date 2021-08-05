// Leetcode 129

// 求根节点到叶节点数字之和

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = 0, track = 0;
    const backTrack = function (root) {
        if (!root) {
            return;
        }

        track = track * 10 + root.val;

        if (!root.left && !root.right) {
            res += track;
        } else {
            backTrack(root.left);
            backTrack(root.right);
        }

        track = (track - root.val) / 10;
    }

    backTrack(root);
    return res;
};