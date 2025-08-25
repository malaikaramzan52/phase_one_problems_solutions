// Take a list of mixed integers from user and remove duplicates, but keep only
//  the last occurrence of each element. Then show final output
let numbers = prompt("Enter mixed list of integers (comma separated):").split(",").map(Number);

let uniqueNumbers = [];//resultant array
for(let i = numbers.length - 1; i >= 0; i--)//from right to left  
    {
    if(!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.unshift(numbers[i]);//to push an element at start of an array 
    }
}
console.log(uniqueNumbers);
