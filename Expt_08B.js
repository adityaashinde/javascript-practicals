// Exp 8b: Perform intersection operation - Elements of set a that are also in set b

function intersection(setA, setB) {
  let intersectionSet = new Set();

  for (let i of setB) {
    if (setA.has(i)) {
      intersectionSet.add(i);
    }
  }
  return intersectionSet;
}

// two sets of fruits
const setA = new Set(["apple", "mango", "orange"]);
const setB = new Set(["grapes", "apple", "banana"]);

const result = intersection(setA, setB);

console.log(result);
