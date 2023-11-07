const prompt = require("prompt-sync")({ sigint: true });

// program to generate a multiplication table

const number = parseInt(prompt("Enter an integer: "));

// creating a multiplication table

for (let i = 1; i <= 10; i++) {
  const result = i * number;

  console.log(`${number} * ${i} = ${result}`);
}
