// Leetcode 54

// 螺旋矩阵

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = [];
    if (!matrix || !matrix.length || !matrix[0].length) {
        return res;
    }

    let m = matrix.length, n = matrix[0].length;
    let counter = 0, all = m * n;
    let top = 0, left = 0, bottom = m - 1, right = n - 1;

    while (counter < all) {
        let pointerRow = top, pointerColumn = left;

        while (counter < all && pointerColumn <= right) {
            counter++;
            res.push(matrix[top][pointerColumn]);
            pointerColumn++;
        }
        pointerRow = top + 1;

        while (counter < all && pointerRow <= bottom) {
            counter++;
            res.push(matrix[pointerRow][right]);
            pointerRow++;
        }
        pointerColumn = right - 1;

        while (counter < all && pointerColumn >= left) {
            counter++;
            res.push(matrix[bottom][pointerColumn]);
            pointerColumn--;
        }
        pointerRow = bottom - 1;

        while (counter < all && pointerRow > top) {
            counter++;
            res.push(matrix[pointerRow][left]);
            pointerRow--;
        }

        top++; left++; bottom--; right--;
    }

    return res;
};