// Leetcode 20

// 有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) {
        return false;
    }

    // 左括号
    const left = ['(', '[', '{'];

    // 右括号
    const right = [')', ']', '}'];

    // 栈
    const stack = [];

    const n = s.length;

    for (let i = 0; i < n; i++) {
        if (left.indexOf(s[i]) !== -1) {
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if (right.indexOf(s[i]) !== left.indexOf(top)) {
                return false;
            }
        }
    }

    if (stack.length) {
        return false;
    }

    return true;
};