// Function to compare two strings using different methods
function compareStrings(str1, str2) {
  // Method 1: Using strict equality (===)
  const method1 = str1 === str2;

  // Method 2: Using localeCompare
  const method2 = str1.localeCompare(str2) === 0;

  // Method 3: Using regular expressions to compare ignoring case
  const method3 = str1.toLowerCase() === str2.toLowerCase();

  // Method 4: Using startsWith and endsWith
  const method4 =
    str1.startsWith(str2[0]) && str1.endsWith(str2[str2.length - 1]);

  return {
    "Method 1 (===)": method1,
    "Method 2 (localeCompare)": method2,
    "Method 3 (toLowerCase)": method3,
    "Method 4 (startsWith, endsWith)": method4,
  };
}

// Example strings for comparison
const string1 = "Hello";
const string2 = "hello";

// Comparing the strings using different methods
const comparisonResult = compareStrings(string1, string2);

// Displaying the results
console.log(`Comparing "${string1}" and "${string2}":`);
for (const method in comparisonResult) {
  console.log(`${method}: ${comparisonResult[method]}`);
}
