// Declaure a function that takes three numbers as arguments and returns the sum of the squares of the two larger numbers
function sum_of_larger_squares(x, y, z) {
  return (
    square(x) +
    square(y) +
    square(z) -
    square(x > y ? (y > z ? z : y) : x > z ? z : x)
  );
}

function square(x) {
  return x * x;
}

// Test
console.log(sum_of_larger_squares(2, 3, 4)); // ==> 25
console.log(sum_of_larger_squares(42, 88, 19)); // ==> 9508
console.log(sum_of_larger_squares(-3, 99, 0)); // ==> 9801
