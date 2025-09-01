//  Build a program to find the smallest missing positive integer from a list using
//  set operations.

let nums = prompt("Enter numbers separated by commas:").split(",").map(Number);
function findSmallestMissingPositive(nums) {
    let numSet = new Set(nums);
    let smallestMissing = 1;

    while (numSet.has(smallestMissing)) {
        smallestMissing++;
    }

    return smallestMissing;
}

let numbers = findSmallestMissingPositive(nums);
console.log(numbers);