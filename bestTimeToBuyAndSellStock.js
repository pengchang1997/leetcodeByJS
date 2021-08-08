// Leetcode 121

// 买卖股票的最佳时机

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }

    const n = prices.length;
    const dp = new Array(n);

    for (let i = 0; i < n; i++) {
        dp[i] = 0;
    }

    let minPrice = prices[0], res = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i], prices[i] - minPrice);
        minPrice = Math.min(prices[i], minPrice);
        res = Math.max(dp[i], res);
    }

    return res;
};