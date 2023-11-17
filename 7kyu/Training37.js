/* 
Coding in function countAnimals. function accept two parameters: 
animals, a string contains some animals; count, an array list of which animals we should count. 
The result should be a number array.

Examples
countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]
*/
function countAnimals(animals,count){
    let res=[]
    for (var r of count){res.push(animals.match(new RegExp(r,'g')).length)===null?null:animals.match(new RegExp(r,'g')).length}
    return res
  }
  console.log(countAnimals("dog,dog,cat",["dog","cat"]))