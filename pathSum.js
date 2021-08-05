// Leetcode 112

// 路径总和

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let track = 0, flag = false;
    const backTrack = function (root) {
        if (!root) {
            return;
        }

        track += root.val;
        if (!root.left && !root.right) {
            if (track === targetSum) {
                flag = true;
                return;
            }
        } else {
            backTrack(root.left);
            backTrack(root.right);
        }
        track -= root.val;
    }

    backTrack(root);

    return flag;
};