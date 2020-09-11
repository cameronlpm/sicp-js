// Describe the behavior of the following function:
function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

// Let arguments a, b = -3, 5
// First evaluate the function expression, a_plus_abs_b
// Next evaluate the argument expression (a, b) with values (-3, 5) respectively
// Next evaluate the return expression with the argument values in place of the parameters (5 >= 0 ? plus : minus)(-3, 5)
// Next evaluate the function expression (5 >= 0 ? plus : minus) which evaluates to plus
// Next evaluate the body of plus with the argument values in place of the parameters to ultimately result in 5 + (-3) which evalutes to 2.
