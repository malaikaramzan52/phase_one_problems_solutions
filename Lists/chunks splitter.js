// Implement a "chunk splitter". Given a list and a chunk sizen, split it into
//  sublists of exactly n elements, padding with None if needed.
let myarray = prompt("Enter an array:").split(",").map(Number);
let chunkSize = Number(prompt("Enter chunk Size"));

function chunkSplitter(myarray, size) {
    let result = [];
    for(let i=0 ;i<myarray.length ; i+= size){
       let chunk = myarray.slice(i,i+size);//size+i
       while(chunk.length <size)//padding with null is chunks size < length.size
        {
        chunk.push(null);
       }
       result.push(chunk);
    }
    return result;
}
let output =chunkSplitter(myarray,chunkSize);
console.log("Chunked Array: ", output);