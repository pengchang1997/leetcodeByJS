// Leetcode 1

// 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        let another = target - nums[i];
        if (hash[another] !== undefined) {
            return [i, hash[another]];
        }
        hash[nums[i]] = i;
    }
    return [];
};