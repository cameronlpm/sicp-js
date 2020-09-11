// Newton's method of successive approximations

function sqrt(x) {
  return sqrt_iter(1, x);
}

function sqrt_iter(guess, x) {
  return good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function good_enough(guess, x) {
  return abs(square(guess) - x) < 0.001;
}

function abs(x) {
  return x >= 0 ? x : -x;
}

function square(x) {
  return x * x;
}

// Tests
console.log(sqrt(2)); // 1.4142156862745097
console.log(sqrt(9)); // 3.00009155413138
console.log(sqrt(100 + 37)); // 11.704699917758145
console.log(sqrt(2) + sqrt(3)); // 3.146358543417367
console.log(sqrt(1000)); // 31.622782450701045
