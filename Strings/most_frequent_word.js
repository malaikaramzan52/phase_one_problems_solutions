// Write a program that finds the most frequent word in a given paragraph,
// ignoring punctuation and case


let paragraph = prompt("Enter a paragraph:");
//to LowerCase
paragraph=paragraph.toLowerCase();
//to Remove punctuation marks & numbers
paragraph=paragraph.replace(/[^a-z\s]/g,"");
//split words with spaces
let words =paragraph.split(" ");

let mostfrequent ="";
let maxCount=0;
//Map method
let freq = new Map();
//Find frequency of each word
for(let word of words){
    if(freq.has(word)){
        freq.set(word, freq.get(word)+1);
    }else{
        freq.set(word, 1);
    }
}
//Find the most frequent word
for(let [word,count] of freq){
    if(count>maxCount){
        maxCount=count;
        mostfrequent=word;
    }
}
//Final result
console.log("Most frequent word:", mostfrequent);
console.log("Frequency:", maxCount);