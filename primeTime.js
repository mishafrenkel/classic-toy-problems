/*
This challenge requires you to determine if a given number is a prime number
which means it is only divisible by 1 and itself. The first few primes
are: 2, 3, 5, 7, 11, ... To solve this challenge, we'll create a loop
that will run from the number 2 to N checking if N is evenly divisible by any number in the list. If N is divisible by some number it means that there is no remainder, so we'll be using the modulo function for this challenge.
*/

// function isPrime(n) {

//   if (n < 2) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(isPrime(113));
console.log(isPrime(22));


function Prime(num) {
  switch (num) {
    case 1:
      return 'false';
    case 2:
      return 'true';
    default: {
      const pivot = Math.floor(Math.sqrt(num));
      for (let i = 2; i <= pivot; i++) {
        if (!(num % i)) return 'false';
      }
      return 'true';
    }
  }
}