/* DESCRIPTION:
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string */

//SOLUTION
function isValidIP(str) {
    let arr=str.split('.'),
        checkNumb=!arr.map((e)=>isNaN(+e)).includes(true),
        checkZero=!arr.map((e)=>((+e[0]===0)&&(e.length>1)?false:true)).includes(false)
        checkN=arr.map((e)=>e.includes('\n')||e.includes('e')||e.includes(' ')).includes(true)?false:true
        checkBorder=!arr.map((e)=>(e<=255)&&(e>=0)).includes(false)
    return  (checkZero&&checkNumb&&(str.length>0)&&checkN&&(arr.length===4)&&checkBorder&&(str.split('.').map((e)=>e!='').includes(false)?false:true))
    }
console.log('IS valid IP?',isValidIP('123.45.67.89'));