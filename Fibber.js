class Fibber {
  constructor() {
    this.memo = {};
  }

  fib(n) {
    if (n < 0) throw new Error('No!');
    else if (n <= 1) {
      return n;
    }
    if (this.memo.hasOwnProperty(n)) {
      return this.memo(n);
    }
    const result = this.fib(n - 1) + this.fib(n - 2);
    return result;
  }
}

const fib = new Fibber();
console.log(fib.fib(10));


// Bottom up Solution
// const fib = (n) => {
//   if (n <= 1) return n;

//   let prevPrev = 0;
//   let prev = 1;
//   let current;

//   for (let i = 1; i < n; i++) {
//     current = prevPrev + prev;
//     prevPrev = prev;
//     prev = current;
//   }
// };