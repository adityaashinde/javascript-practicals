const prompt = require("prompt-sync")({ sigint: true });

// Experiment 1: JavaScript program to calculate area of triangle, area of rectangle and area of circle

var base = parseInt(prompt("Enter the base: "));
var height = parseInt(prompt("Enter the height: "));

//Calculating the area
var area = (base * height) / 2;

//Display Output

console.log("Base: " + base);
console.log("Height: " + height);
console.log("The area of the triangle is " + area);
