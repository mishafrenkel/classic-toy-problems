/*
Write a recursive function for generating all permutations of an input string.
Return them as a set.
*/

// slice all characters except the last char
// store last char in a variable
// recursive call to generate all permutations on the string(minus the lastChar)


function getAllPermutations(string) {

  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharactersExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getAllPermutations(allCharactersExceptLast);

  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutationsOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharactersExceptLast.length; position++) {
      const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast;
      permutations.add(permutation);
    }
  });
  return permutations;
}

module.exports = getAllPermutations;