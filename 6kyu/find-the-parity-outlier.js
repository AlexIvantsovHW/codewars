/*
---------------DESCREPTION------------------------ 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number) */
//---------------SOLUTION------------------------

function findOutlier(integers){
    let OddEven=integers.map((e)=>(e%2===0?'Odd':'Even'))
    let OddOrEven=integers.map((e)=>(e%2===0?1:0)).reduce((acc,i)=>{return (acc+=i)})>1?'Even':'Odd'
    return integers[OddEven.indexOf(OddOrEven)]
  }  

console.log(findOutlier([0, 1, 2]))//1
console.log(findOutlier([1, 2, 3]))//2
console.log(findOutlier([2,6,8,10,3]))//3
console.log(findOutlier([0,0,3,0,0]))//3
console.log(findOutlier([1,1,0,1,1]))//0