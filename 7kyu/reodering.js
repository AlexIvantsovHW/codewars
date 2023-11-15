/* 
There is a sentence which has a mistake in its ordering.
The part with a capital letter should be the first word.
Please build a function for re-ordering
*/

function reOrdering(text){
    if(text.split(' ').length===1){return text}
     let Id=text.split(' ').map((e,i)=>e[0]===e[0].toUpperCase()?i:null).filter((e)=>e!=null)[0]
     let targetWord=text.split(' ')[Id]
     return  targetWord+[' ']+text.split(' ').filter((e,i)=>i!=Id).join(' ')
   }