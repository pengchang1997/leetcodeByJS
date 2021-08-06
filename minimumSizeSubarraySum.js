// Leetcode 209

// 长度最小的子数组

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let currentSum = 0, slow = 0, fast = 0, res = nums.length + 1;
    while (fast < nums.length) {
        currentSum += nums[fast];
        while (currentSum >= target) {
            res = Math.min(fast - slow + 1, res);
            currentSum -= nums[slow];
            slow++;
        }

        fast++;
    }

    return res <= nums.length ? res : 0;
};