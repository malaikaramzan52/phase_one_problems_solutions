// write a recursive function to reverse a string.
let str = "Hello World";
function reverseString(str) {
    if(str == " " || str.length === 1){
        return str;//base case
    }
     //Slice the last character and add it to the reverse of the remaining string
    return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));
}
//Result
console.log(reverseString(str));