const prompt = require("prompt-sync")({ sigint: true });

function insertObject(arr, obj) {
  // append object
  arr.push(obj);
  console.log(arr);
}

function checkObject(arr) {
  // check if arr is array
  const result = Array.isArray(arr);

  if (result) {
    console.log(`${arr} is an array.`);
  } else {
    console.log(`${arr} is not an array`);
  }
}

// original array
let array = [1, 2, 3];

// object to add
let object = { x: 12, y: 8 };

// Check if object is array
checkObject(object);

// call the function
insertObject(array, object);
