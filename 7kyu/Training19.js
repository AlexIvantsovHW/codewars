/* 
Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence 
turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is 
the form of alien language ;-)

for example:
alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
*/

function alienLanguage(str){
    let LW=str.split(' ').map((e,i)=>e.split('').at(-1))
    let UP=str.split(' ').map((e)=>e.slice(0,-1).toUpperCase())
    let res=[]
    for (let i=0;i<UP.length;i++){
      res.push(UP[i]+LW[i])
    }
    return res.join(' ')
}

  console.log(alienLanguage("My name is John"))

