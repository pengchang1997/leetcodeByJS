// Leetcode 46

// 全排列

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    if (nums.length <= 0) {
        return res;
    }

    const track = [], n = nums.length;
    const backTrack = function () {
        if (track.length === n) {
            res.push(track.slice());
            return;
        }

        for (let i = 0; i < n; i++) {
            if (track.indexOf(nums[i]) != -1) {
                continue;
            }

            track.push(nums[i]);
            backTrack();
            track.pop();
        }
    }

    backTrack();
    return res;
};