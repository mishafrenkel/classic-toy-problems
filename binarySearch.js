function binarySearch(target, arr) {
  let floorIndex = - 1;
  let ceilingIndex = arr.length;

  while (floorIndex + 1 < ceilingIndex) {

    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);

    const guessIndex = halfDistance + floorIndex;
    const guessValue = arr[guessIndex];

    if (guessValue > target) ceilingIndex = guessIndex;
    else if (guessValue < target) floorIndex = guessIndex;
  }
}

const assert = require('assert');
const result = binarySearch(3, [1, 2, 3, 4, 5]);
try {
  assert.equal(result, true);
} catch (e) {
  console.error('expected:', e.expected);
  console.error('actual:', e.actual);
}


module.exports = {
  binarySearch
}