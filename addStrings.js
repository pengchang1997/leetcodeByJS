// Leetcode 415

// 字符串相加

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // 返回的字符串
    let res = "";

    // 进位
    let carry = 0;

    // 指针
    let pointer1 = num1.length - 1, pointer2 = num2.length - 1;
    while (pointer1 >= 0 && pointer2 >= 0) {
        let temp = (num1[pointer1] - '0') + (num2[pointer2] - '0') + carry;

        // 更新进位
        carry = (temp >= 10) ? 1 : 0;

        // 更新结果
        res = (temp % 10) + res;

        // 更新指针
        pointer1--; pointer2--;
    }

    if (pointer1 >= 0) {
        while (pointer1 >= 0) {
            let temp = (num1[pointer1] - '0') + carry;

            // 更新进位
            carry = (temp >= 10) ? 1 : 0;

            // 更新结果
            res = (temp % 10) + res;

            // 更新指针
            pointer1--;
        }
    }

    if (pointer2 >= 0) {
        while (pointer2 >= 0) {
            let temp = (num2[pointer2] - '0') + carry;

            // 更新进位
            carry = (temp >= 10) ? 1 : 0;

            // 更新结果
            res = (temp % 10) + res;

            // 更新指针
            pointer2--;
        }
    }

    if (carry) {
        res = carry + res;
    }

    return res;
};