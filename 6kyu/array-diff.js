/* 
---------------DESCREPTION------------------------ 
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3] */

//---------------SOLUTION------------------------
function arrayDiff(a, b) {
    let unique;
    if((a.length===0)||(b.length===0)){
        a=[]
        return a}
    else{
    let unique1 = a.filter((o) => b.indexOf(o) === -1);
    let unique2 = b.filter((o) => a.indexOf(o) === -1);
     unique = unique1.concat(unique2);
     a=unique
    return a;}
}

console.log(arrayDiff([1,2,2,2,3],[2]))
console.log(arrayDiff([1,2], [1]));//2
console.log(arrayDiff([1,2,2], [1]))//[2,2]
console.log(arrayDiff([1,2,2], [2]))//[1]
console.log(arrayDiff([1,2,2], []));//[]
console.log(arrayDiff([], [1,2]));//[]
console.log(arrayDiff([1,2,3], [1,2]))//3