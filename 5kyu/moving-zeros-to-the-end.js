/*
---------------DESCREPTION------------------------  
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */
//---------------SOLUTION------------------------ 
function moveZeros(arr) {
    const nonZeros = arr.filter(element => element !== 0);
    const zeroCount = arr.length - nonZeros.length;    
    const result = nonZeros.concat(Array(zeroCount).fill(0));
    return result;
  }
console.log(moveZeros([false,true,0,1,[],{},2,0,1,3,"a"]))