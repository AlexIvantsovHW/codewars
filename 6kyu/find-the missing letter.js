/*
---------------DESCREPTION------------------------
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

//---------------SOLUTION------------------------
function findMissingLetter(array){
    let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        alphabetCase,
        alphabetIndex=alphabet.map((e,i)=>i);
  (array[0]===array[0].toUpperCase()?alphabetCase=alphabet:alphabetCase=alphabet.map((e)=>e.toLowerCase()))
  let arraySequence=array.map((e)=>alphabetCase.indexOf(e));
  let res=[]
  for(let i=0;i<arraySequence.length;i++){
    if((arraySequence[i+1]-arraySequence[i])>1){res.push(arraySequence[i]+1)}
  }
  return alphabetCase[res[0]]
}

console.log(findMissingLetter(['a','b','c','d','f'] ));