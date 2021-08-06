// Leetcode 189

// 旋转数组

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var reverseArray = function (nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++; end--;
    }
}

var rotate = function(nums, k) {
    const n = nums.length;
    if (k % n === 0) {
        return;
    }

    const trueK = k % n;
    reverseArray(nums, 0, n - 1);
    reverseArray(nums, 0, trueK - 1);
    reverseArray(nums, trueK, n - 1);
};