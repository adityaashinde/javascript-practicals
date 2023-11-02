const prompt = require("prompt-sync")({ sigint: true });

//Exp 6c: Program to empty an array
//Method 1

function emptyArray(arr) {
  // substituting new array
  arr = [];

  return arr;
}

const array1 = [1, 2, 3];
console.log(array1);

// call the function
const result1 = emptyArray(array1);
console.log(result1);

//Exp 6c: Program to empty an array: Method 2

function emptyArray(arr) {
  // substituting new array
  arr.splice(0, arr.length);

  return arr;
}

const array2 = [1, 2, 3];
console.log(array2);

// call the function
const result2 = emptyArray(array2);
console.log(result2);

// Exp 6c: program to empty an array: Method 3

function emptyArray(arr) {
  // setting array length to 0
  arr.length = 0;

  return arr;
}

const array3 = [1, 2, 3];
console.log(array3);

// call the function
const result3 = emptyArray(array3);
console.log(result3);
