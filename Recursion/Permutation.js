// Write a recursive function to generate all permutations of a given list
let nums = [1, 2, 3];
let result = [];

function swap(nums,i,j){
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
function getPerms(nums,idx,result){
      if(idx === nums.length){
          result.push([...nums]);
          return;
      }

    for(let i=idx;i<nums.length;i++){
        swap(nums,i,idx);//idx place => ith element place
        getPerms(nums,idx+1,result);
        swap(nums,i,idx);//backtracking to original array
    }

}
getPerms(nums,0,result);
console.log(result);
//Time Complexity : O(n * n!)
//Space Complexity : O(n)