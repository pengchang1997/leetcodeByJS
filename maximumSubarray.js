// Leetcode 53

// 最大子序和

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    const n = nums.length;
    const dp = new Array(n);
    dp[0] = nums[0];
    let res = dp[0];
    for (let i = 1; i < n; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = nums[i] + dp[i - 1];
        } else {
            dp[i] = nums[i];
        }

        res = Math.max(res, dp[i]);
    }

    return res;
};