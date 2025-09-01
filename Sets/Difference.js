//  Given two lists, find the elements that appear in exactly one list, without
//  using loops (just set operations)

let list1 = [1, 2, 3, 4];
let list2 = [3, 4, 5, 6];

let set1 = new Set(list1);
let set2 = new Set(list2);

let difference = set1.symmetricDifference(set2);
console.log(difference); //output: Set { 1, 2, 5, 6 }