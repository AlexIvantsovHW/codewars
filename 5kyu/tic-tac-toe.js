function isSolved(board) {
    let horizontalCheck=[];
    let verticalLine=[]
    for (let i=0;i<board.length;i++){
        for (let j=0;j<board.length;j++){
            verticalLine.push(board[j][i])
        }
    }
    //------------Vertical line-----------
    let v1=verticalLine.slice(0,3)
    let v2=verticalLine.slice(4,7)
    let v3=verticalLine.slice(6,9)
    // X estimation
    let Xv11=v1.every((e)=>e===1)
    let Xv12=v2.every((e)=>e===1)
    let Xv13=v3.every((e)=>e===1)
    let XverticalResult=Xv11||Xv12||Xv13
    // O estimation
    let Ov11=v1.every((e)=>e===2)
    let Ov12=v2.every((e)=>e===2)
    let Ov13=v3.every((e)=>e===2)
    let OverticalResult=Ov11||Ov12||Ov13
    
//------------Horizontal line-----------

    for(let i=0;i<board.length;i++){
        if(board.every((e)=>e===1)){
            horizontalCheck.push(true) 
        }else{horizontalCheck.push(true)}
    } 
   console.log('v1:',horizontalCheck)
   //console.log('v2:',Xv12)
   //console.log('v3:',Xv13)
  }

  console.log(isSolved(
    [[1, 1, 2],
    [1, 2, 2],
    [0, 1, 1]]))