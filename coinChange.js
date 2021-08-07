// Leetcode 322

// 零钱兑换

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0;
    }

    coins.sort((a, b) => a - b);

    const dp = new Array(amount + 1);
    for (let i = 0; i <= amount; i++) {
        if (coins.includes(i)) {
            dp[i] = 1;
        } else {
            dp[i] = Number.MAX_SAFE_INTEGER;
        }
    }

    for (let i = 1; i <= amount; i++) {
        if (dp[i] === 1) {
            continue;
        } else {
            for (let j = 0; j < coins.length; j++) {
                if (i - coins[j] > 0 && dp[i-coins[j]]) {
                    dp[i] = Math.min(dp[i-coins[j]] + 1, dp[i]);
                }
            }
        }
    }

    return dp[amount] < Number.MAX_SAFE_INTEGER ? dp[amount] : -1;
};