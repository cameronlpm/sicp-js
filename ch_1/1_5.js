/*
Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is using applicative-order evaluation or normal-order evaluation. He declares the following two functions, and then evalutes the statement:
test(0, p());
*/
function p() {
  return p();
}

function test(x, y) {
  return x === 0 ? 0 : y;
}

// What behavior will Ben observe with an interpreter that uses applicative-order evaluation?
// What behavior will he observe with an interpreter that uses normal-order evaluation?

/* 
First we must evaluatie the function expression test, and then we evaluate the argument expression (0, p()). Evaluating the argument 0 yields the value 0. Evaluating the argument p() yields the function p, which is a non-breaking recursive function. Normal-order evaluation takes a 'fully expand and then reduce' evaluation method in contrast to the 'evaluate the arguments and then apply' method of applicative-order evaluation.

Should Ben be faced with an applicative-order evaluation interpreter, he will observe the non-breaking infinite recursion when the argument p() is evaluated, so essentially he will see a stack overflow. 

Should Ben be faced with a normal-order evaluation interpreter, the argument operands will not be evaluated until their values are actually needed. So in the case of evaluating test(0, p()), the interpreter will evaluate the return conditional expression of x == 0 ? 0 : p(); which will short-circuit and yield a result of 0, and thus p() is never evaluated. 
*/
