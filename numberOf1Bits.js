// Leetcode 191

// 位1的个数

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let counter = 0;
    while (n) {
        counter++;
        n &= (n - 1);
    }

    return counter;
};