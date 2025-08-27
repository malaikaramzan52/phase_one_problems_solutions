
// Count character frequencies in a string and store them in a dictionary, sorted alphabetically by character.
let str = prompt ("Enter a string:");
str = str.toLowerCase();

//function to count character frequencies
function frequentChar(str){
    let freqdict={};
    for(let char of str){
        freqdict[char] = freqdict[char] || 0;
        freqdict[char]++;
    }
    // Sort the dictionary by key (character)
    return Object.fromEntries(
        Object.entries(freqdict).sort((a,b)=> a[0].localeCompare(b[0]))
    );
};

//Final output
let result = (frequentChar(str));
console.log (result);