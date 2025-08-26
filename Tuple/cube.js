// Create a program that generates a list of tuples where each tuple contains a
// number and its cube, for numbers from 1 to 20.

let cubes =[];
for(let i=1;i<=20;i++){
    cubes.push([i,i**3]);
}
//Result
console.log(cubes);