// Leetcode 88

// 合并两个有序数组

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer1 = m - 1, pointer2 = n - 1, pointer = m + n - 1;
    for (let i = 0; i < n; i++) {
        while (nums1[pointer1] >= nums2[pointer2] && pointer1 >= 0) {
            nums1[pointer] = nums1[pointer1];
            pointer--; pointer1--;
        }

        nums1[pointer] = nums2[pointer2];
        pointer--; pointer2--;
    }
};