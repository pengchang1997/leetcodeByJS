// Leetcode 5

// 最长回文子串

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s;
    }

    const len = s.length;
    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len);
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            dp[i][j] = false;
        }
    }

    let maxLen = 1, maxStart = 0, maxEnd = 0;
    for (let right = 1; right < len; right++) {
        for (let left = 0; left < right; left++) {
            if (s[left] === s[right] && (right - left <= 2 || dp[left+1][right-1])) {
                dp[left][right] = true;
                if (right - left + 1 > maxLen) {
                    maxLen = right - left + 1;
                    maxStart = left; maxEnd = right;
                }
            }
        }
    }

    return  s.substring(maxStart, maxEnd + 1);
};