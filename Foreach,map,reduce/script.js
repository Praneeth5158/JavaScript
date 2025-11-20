// forEach = similar to the "for loop" in Python
// Syntax:
// array.forEach(function(value, index, array))

// Note: forEach does NOT return anything. (It always returns undefined)

const a = [1, 2, 3, 4, 5];
let sum = 0;

a.forEach(function (value, index, array) {
  sum = sum + value;
  console.log(sum);
});


//============================================================

// map = similar to forEach BUT it returns a new array

b = ["praneeth", "satya", "deepu", "karthik"];
let result = b.map(function (value) {
  return value.toUpperCase();
});
console.log(result);

//=================================================================
// reduce = used to combine all values into one
// NOTE: You must give an initial value (important!)

c = [1, 2, 3, 4, 5, 6];

let finalAnswer = c.reduce(function (previous, current) {
  console.log(previous, current);
  return previous + current;
}, 0); // <— This is the initial value means it sarts from the 0 (1st previous will take it as 0)

console.log(finalAnswer);
