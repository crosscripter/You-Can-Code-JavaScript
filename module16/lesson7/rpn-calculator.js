/**
 * Reverse Polish Notation Calculator
 * @file rpn-calculator.js
 * @description Small sample RPN calculator app
 * @author Michael Schutt (@crosscripter) 
 * @date 2024-12-18
 * @version 0.1.1
 */


/**
 * Main calculate function takes an expression and returns result 
 * @param expression {string} The expression to evaluate.
 * @returns {number} The result of the calculation
 */
function calculate(expression) {

  const stack = [];
  const tokens = expression.split(' ');

  tokens.forEach(token => {

    if (!isNaN(token)) {

      // If the token is a number, push it onto the stack
      stack.push(Number(token));

    } else {

      // If it's an operator, pop two numbers from the stack
      const b = stack.pop();
      const a = stack.pop();

      // Use eval to perform the operation
      const result = eval(`${a} ${token} ${b}`);
      stack.push(result);

    }

  });

  // Final result should be the only item left in the stack
  return stack.pop();
}

//#region 
const [input] = process.argv.slice(2)
console.log(calculate(input));
//#endregion
