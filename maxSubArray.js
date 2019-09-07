function maxSumArr(arr) {
  let count = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let subArrSum = arr
        .slice(i, j + 1)
        .reduce((a, b) => a + b);

      count = Math.max(count, subArrSum);
    }
  }
  return count;
}


const assert = require('assert');

assert.equal(maxSumArr([1, 2, 3, -1, 8]), 13, console.log('success'));