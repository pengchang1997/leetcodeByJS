// Leetcode 15

// 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    if (nums.length <= 2) {
        return res;
    }

    // 对数组排序
    nums.sort((a, b) => a - b);

    // 将数组元素映射到其出现的次数
    const numToTimes = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numToTimes.get(nums[i]) !== undefined) {
            numToTimes.set(nums[i], numToTimes.get(nums[i]) + 1);
        } else {
            numToTimes.set(nums[i], 1);
        }
    }

    const uniqueNums = [];
    numToTimes.forEach((value, key) => {
        uniqueNums.push(key);
    });

    for (let i = 0; i < uniqueNums.length; i++) {
        if (3 * uniqueNums[i] === 0 && numToTimes.get(uniqueNums[i]) >= 3) {
            res.push([uniqueNums[i], uniqueNums[i], uniqueNums[i]]);
        }

        for (let j = i + 1; j < uniqueNums.length; j++) {
            if (2 * uniqueNums[i] + uniqueNums[j] === 0 && numToTimes.get(uniqueNums[i]) >= 2) {
                res.push([uniqueNums[i], uniqueNums[i], uniqueNums[j]]);
            }

            if (2 * uniqueNums[j] + uniqueNums[i] === 0 && numToTimes.get(uniqueNums[j]) >= 2) {
                res.push([uniqueNums[j], uniqueNums[j], uniqueNums[i]]);
            }

            let another = 0 - uniqueNums[i] - uniqueNums[j];
            if (numToTimes.get(another) !== undefined && another > uniqueNums[j]) {
                res.push([uniqueNums[i], uniqueNums[j], another]);
            }
        }
    }

    return res;
};