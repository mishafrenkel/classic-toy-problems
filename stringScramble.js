function StringScramble(str1, str2) {

  // loop through string 2
  for (var i = 0; i < str2.length; i++) {

    // check if each character also exists in string 1
    // if not, return false
    if (str1.indexOf(str2.charAt(i)) === -1) {
      return false;
    }

  }

  // return true if all characters exist in string 1
  return true;
}

// Alternate Solution

function StringScramble(str1, str2) {
  let sort1 = str1.toLowerCase().split('').sort().join('');
  let sort2 = str2.toLowerCase().split('').sort().join('');

  return sort1 === sort2;
}


console.log(StringScramble(''))