const prompt = require("prompt-sync")({ sigint: true });

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumeric = str.toLowerCase().replace(/[\W_]/g, "");
  // Reverse the string and compare it to the original, return true if they match
  return alphanumeric === alphanumeric.split("").reverse().join("");
}

// Function to take user input and check if it's a palindrome
function checkPalindrome() {
  const userInput = prompt("Enter a String to check if it's a palindrome:");

  if (userInput) {
    if (isPalindrome(userInput)) {
      console.log(`"${userInput}" is a palindrome.`);
    } else {
      console.log(`"${userInput}" is not a palindrome.`);
    }
  } else {
    console.log("No input provided.");
  }
}

// Call the function to check for palindrome
checkPalindrome();
