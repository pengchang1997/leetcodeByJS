// Leetcode 300

// 最长递增子序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    const n = nums.length;
    const dp = new Array(n);

    for (let i = 0; i < n; i++) {
        dp[i] = 1;
    }

    let res = 0;
    for (let i = 1; i < n; i++) {
        let maxLength = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[j] > maxLength) {
                dp[i] = dp[j] + 1;
                maxLength = dp[j];
            }
        }
        res = Math.max(dp[i], res);
    }

    return res;
};