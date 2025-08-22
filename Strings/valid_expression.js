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

console.log(isValidExpression(expression));
