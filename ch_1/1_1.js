/* 
* Conditional expressions
To evaluate a conditional expression, the interpreter first evaluates the predicate part
of the expression. If the predicate evaluates to true, the interpreter evaluates consequent-expression. Otherwise it evaluates alternative-expression.
* predicate ? consequent-expression : alternative expression
*/

function abs(x) {
  return x >= 0 ? x : -x;
}
