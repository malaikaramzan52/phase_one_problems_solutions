// // Number Guessing Game



let limit = 10;
let limitScore = 10;
let maxScore = limit * limitScore;

let secretNumber = Math.floor(Math.random() * 100) + 1;//to generate random number.

let attempt = 0;
let correct = false;//initialy correct is false

while (attempt < limit) {
    let guess = parseInt(prompt(`Attempt ${attempt + 1} / ${limit}: Guess the number (1-100)`));//convert string to number
    attempt++;
    if (guess === secretNumber) {
        let score = maxScore - (attempt - 1) * limitScore;
        alert(`🎉 Correct! The number was ${secretNumber}. 
        You guessed it in ${attempt} attempt(s). 
        Your score: ${score}`);
        correct = true;
        break;
    }

    else if (guess < secretNumber)//if the number is low than secret number
    {
        alert("📉 Too low! Try again.");
    }
    else //if the number is high than secret number
    {
        alert("📈 Too high! Try again.");
    }
}

if (!correct) //if limit is over
    {
    alert(`❌ Game Over! The number was ${secretNumber}. Your score: 0`);
}


