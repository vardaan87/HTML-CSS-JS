// Write a JS program to find the no of digits in a number.
// Example: if number = 287152, count = 6.

let number = 287152;
let count = 0;

let copy = number;

while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}

console.log(`Number of digits = ${count}`);
