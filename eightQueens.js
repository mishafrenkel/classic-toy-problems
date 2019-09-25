/*

Have the function EightQueens(strArr) read strArr which will be an array
consisting of the locations of eight Queens on a standard 8x8 chess board
with no other pieces on the board. The structure of strArr will be the
following: ["(x,y)", "(x,y)", ...] where (x,y) represents the position
of the current queen on the chessboard (x and y will both range from 1
  to 8 where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right).
  Your program should determine if all of the queens are placed in such a way where
  none of them are attacking each other. If this is true for the given input, return
  the string true otherwise return the first queen in the list that is attacking another
   piece in the same format it was provided.

For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"]
then your program should return the string true. The corresponding chessboard of queens for this input is below (taken from Wikipedia).
 */

function EightQueens(strArr) {
  let newArr = strArr.map(val => {
    return JSON.parse(val.replace(/\(/g, '[').replace(/\)/g, ']'))
  });

  newArr = newArr.map(val => {
    return val.concat(val[1] - val[0], val[1] + val[0]);
  });

  for (let i = 0; len = newArr.length; i < len; i++) {
    for (let j = 0; j < 4; j++) {
      let target = newArr[i][j];
      if (newArr.filter(val => {
        return val[j] === target;
      }).length > 1) {
        return `(${newArr[i].slice(0, 2)})`
      }
    }
  }

  return true;
}