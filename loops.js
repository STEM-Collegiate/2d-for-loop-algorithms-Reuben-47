// 3x3 Arrays for testing
const testMatrices = [
    [   // ascending numbers
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
    [   // all even numbers
        [-2, 4, -6],
        [8, -10, 12],
        [14, -16, 18]
    ],
    [   // all odd numbers
        [1, 3, 5],
        [-7, -9, 11],
        [13, 15, -17]
    ],
    [   // digits of pi pattern
        [3, -1, 4],
        [1, 5, -9],
        [2, 6, -5]
    ],
    [   // includes undefined values
        [0, 1, undefined],
        [13, 17, 19],
        [5, undefined, 8]
    ],
    [   // includes null values
        [0, 1, null],
        [13, null, 7],
        [9, 2, null]
    ],
    [   // identity matrix
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ],
    [   // mixed large integers
        [500, 100, 200],
        [300, 1000, 400],
        [700, 200, 600]
    ],
    [   // negative to positive range
        [-3, -2, -1],
        [0, 1, 2],
        [3, 4, 5]
    ],
    [   // uniform values
        [10, 10, 10],
        [10, 10, 10],
        [10, 10, 10]
    ]
];




// Example completed function
function sumMatrix(matrix) {
    let total = 0;
    for (const row of matrix) {
        for (const val of row) {
            total += val;
        }
    }
    console.log("The sum total is:", total);
    return total;
}

function rowSum(matrix) {
   let rowSums = [];
for (const row of matrix) {
       let total = 0;
       for (const val of row) {
           total += val;
       }
       rowSums.push(total);
   }
   return rowSums;
}

function colSum(matrix) {
    let colSums = [];
    for (let col = 0; col < matrix[0].length; col++) {
        let total = 0;
        for (const row of matrix) {
            total += row[col];
        }
        colSums.push(total);
    }
    return colSums;
}

function countZeros(matrix) {
   let zeroCount = 0;
   for (const row of matrix) {
       for (const val of row) {
           if (val === 0) {
               zeroCount++;
           }
       }
   }
   return zeroCount;
}

function minValue2D(matrix) {
    let min = Infinity;
    for (const row of matrix) {
        for (const val of row) {
            if (val < min) {
                min = val;
            }
        }
    }
    return min;
}

function maxValue2D(matrix) {
    let max = -Infinity;
    for (const row of matrix) {
        for (const val of row) {
            if (val > max) {
                max = val;
            }
        }
    }
    return max;
}

function doubleMatrix(matrix) {
    let doubled = [];
    for (const row of matrix) {
        let newRow = [];
        for (const val of row) {
            newRow.push(val * 2);
        }
        doubled.push(newRow);
    }
    return doubled;
}

function positiveMap(matrix) {
    let positive = [];
    for (const row of matrix) {
        let newRow = [];
        for (const val of row) {
            newRow.push(val > 0);
        }
        positive.push(newRow);
    }
    return positive;
}

function diagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i] || 0;
    }
    return sum;
}

function transposeMatrix(matrix) {
    let transposed = [];
    for (let col = 0; col < matrix[0].length; col++) {
        let newRow = [];
        for (const row of matrix) {
            newRow.push(row[col]);
        }
        transposed.push(newRow);
    }
    return transposed;
}