// Leetcode 3

// 无重复字符的最长子串

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }

    const window = [];
    const n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let location = window.indexOf(s[i]);
        if (location === -1) {
            window.push(s[i]);
        } else {
            window.splice(0, location + 1);
            window.push(s[i]);
        }

        res = Math.max(res, window.length);
    }

    return res;
};