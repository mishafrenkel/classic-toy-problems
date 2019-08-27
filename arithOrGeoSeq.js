const isArithOrGeo = (arr) => {

  function diffs(diff, arr, subtract) {
    for (let i = 2; i < arr.length; i++) {

      const tempDiff = (subtract) ? arr[i] - arr[i - 1] : arr[i] / arr[i - 1];

      if (tempDiff !== diff) return false;
      else if (tempDiff === diff) return true;
    }
  }

  const aDiff = arr[1] - arr[0];
  const gDiff = arr[1] / arr[0];

  const isArithmeticSequence = diffs(aDiff, arr, true);

  if (!isArithmeticSequence) {
    const isGeometricSequence = diffs(gDiff, arr, false);
    return isGeometricSequence ? 'Geometric' : - 1;
  } else {
    return 'Arithmetic';
  }
};