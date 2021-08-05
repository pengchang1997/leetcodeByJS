// Leetcode 165

// 比较版本号

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let pointer1 = 0, pointer2 = 0, length1 = version1.length, length2 = version2.length;
    while (pointer1 < length1 && pointer2 < length2) {
        let sub1 = 0, sub2 = 0;

        while (version1[pointer1] === '0') {
            pointer1++;
        }

        if (version1[pointer1] === '.') {
            sub1 = 0;
        } else {
            while (version1[pointer1] !== '.' && pointer1 < length1) {
                sub1 = (version1[pointer1] - '0') + sub1 * 10;
                pointer1++;
            }
        }

        while (version2[pointer2] === '0') {
            pointer2++;
        }

        if (version2[pointer2] === '.') {
            sub2 = 0;
        } else {
            while (version2[pointer2] !== '.' && pointer2 < length2) {
                sub2 = (version2[pointer2] - '0') + sub2 * 10;
                pointer2++;
            }
        }

        if (sub1 > sub2) {
            return 1;
        }

        if (sub1 < sub2) {
            return -1;
        }

        pointer1++;
        pointer2++;
    }

    // 继续解析第一个版本号
    if (pointer1 < length1) {
        while (pointer1 < length1) {
            let sub = 0;
            while (version1[pointer1] == '0' && pointer1 < length1) {
                pointer1++;
            }

            if (version1[pointer1] == '0' || pointer1 == length1) {
                sub = 0;
            } else {
                while (version1[pointer1] !== '.' && pointer1 < length1) {
                    sub = (version1[pointer1] - '0') + sub * 10;
                    pointer1++;
                }
            }

            if (sub > 0) {
                return 1;
            }

            pointer1++;
        }
    }

    // 继续解析第二个版本号
    if (pointer2 < length2) {
        while (pointer2 < length2) {
            let sub = 0;
            while (version2[pointer2] == '0' && pointer2 < length2) {
                pointer2++;
            }

            if (version2[pointer2] == '0' || pointer2 == length2) {
                sub = 0;
            } else {
                while (version2[pointer2] !== '.' && pointer2 < length2) {
                    sub = (version2[pointer2] - '0') + sub * 10;
                    pointer2++;
                }
            }

            if (sub > 0) {
                return -1;
            }

            pointer2++;
        }
    }

    return 0;
};