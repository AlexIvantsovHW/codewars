/* 
The maximum sum subarray problem consists in finding the maximum sum of
 a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum 
is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list
 or array is also a valid sublist/subarray.
*/


function deleteNth(arr,n){
    let count = 0;

    for (let i = 0; i < arr.length; i +=1 ) {
      if (arr[i] === 1) {
        count += 1;
      }
    }
    return  count
  }
  console.log(deleteNth([1,1,3,3,7,2,2,2,2], ))