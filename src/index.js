function setMatrixZeroes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let rowZero = new Array(rows).fill(false);
    let colZero = new Array(cols).fill(false);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                rowZero[i] = true;
                colZero[j] = true;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (rowZero[i] || colZero[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}
