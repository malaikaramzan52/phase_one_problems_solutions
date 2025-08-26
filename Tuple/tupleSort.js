//  Implement a function that takes a tuple of tuples and sorts them by the
//  second element in descending order, breaking ties with the first element
//  ascending.
let data  = [
    [1, 8],
    [2, 27],
    [3, 64],
    [4, 125],
    [5, 216]
];
function dataSort(data){
    return data.sort((a,b)=>{
        if(a[1] !== b[1]){
            return b[1] - a[1]; // Descending order for second element
        }
        return a[0] - b[0]; // Ascending order for first element
    });
}
console.log(dataSort(data));