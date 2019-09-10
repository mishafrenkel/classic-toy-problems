
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.time('shuffle');
for (let i = 0; i < arr.length; i++) {
  console.log(shuffle(arr));
}
console.timeEnd('shuffle');