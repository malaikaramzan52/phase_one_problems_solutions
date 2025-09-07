//  Implement a function that takes two sorted lists and merges them into one
//  sorted list without using sort() Or sorted().

//sorted lists
let list1 = [1,2,9,10];
let list2 = [4,5,6];
//function to merge two sorted list
function MergeSortedLists(list1,list2){
    let merged =[];
    let i=0;
    let j=0;
    while(i < list1.length && j<list2.length){
        if(list1[i]<list2[j]){
            merged.push(list1[i]);
            i++;
        }
        else{
            merged.push(list2[j]);
            j++;
        }
    }
    //Add remaining ELements
    while(i<list1.length){
        merged.push(list1[i]);
        i++;
    }
    while(j<list2.length){
        merged.push(list2[j]);
        j++;
    }
    return merged;
}

let MergedList = MergeSortedLists(list1,list2);
console.log(MergedList);
