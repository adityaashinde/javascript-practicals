const prompt = require("prompt-sync")();

function calculateArea() {
  console.log("Choose a shape to calculate its area:");
  console.log("1. Triangle");
  console.log("2. Rectangle");
  console.log("3. Circle");

  const choice = parseInt(prompt("Enter the number of the shape: "));

  switch (choice) {
    case 1:
      const base = parseFloat(prompt("Enter the base of the triangle: "));
      const height = parseFloat(prompt("Enter the height of the triangle: "));
      const areaOfTriangle = 0.5 * base * height;
      console.log(`The area of the triangle is: ${areaOfTriangle}`);
      break;

    case 2:
      const length = parseFloat(prompt("Enter the length of the rectangle: "));
      const width = parseFloat(prompt("Enter the width of the rectangle: "));
      const areaOfRectangle = length * width;
      console.log(`The area of the rectangle is: ${areaOfRectangle}`);
      break;

    case 3:
      const radius = parseFloat(prompt("Enter the radius of the circle: "));
      const areaOfCircle = Math.PI * Math.pow(radius, 2);
      console.log(`The area of the circle is: ${areaOfCircle.toFixed(2)}`);
      break;

    default:
      console.log("Invalid choice. Please enter a number between 1 and 3.");
      break;
  }
}

calculateArea();
