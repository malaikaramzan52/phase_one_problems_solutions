// Implement a function to check whether a given string is a valid mathematical
// expression (only digits, +,-,*,, and parentheses) and whether the
// parentheses are balanced

let expression = prompt("Enter a mathematical expression:");

function isValidExpression(expression){
    let balance = 0;
    for(let char of expression){
        if(!(char >= '0' && char <= '9' || char === '+' || char === '-' || char === '*' || char === '/' || char === '(' || char === ')')){
            return false; // invalid character
        }
        // starting parentheses check
        if (char === '(') balance++;
        // closing parentheses check
        else if (char === ')') {
            balance--;
            if (balance < 0) return false; // ) before (;
        }
    }

    if (balance !== 0) return false; // unbalanced parentheses

    return true; // valid
}
//Result
let result = (isValidExpression(expression));
if (result == true) {
    console.log("Valid expression:", expression);
} else {
    console.log("Invalid expression:", expression);
}
