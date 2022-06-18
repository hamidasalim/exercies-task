var n = 8;
const isSafe =function (board, row, col){
    // horizen
    for(var i=0; i<col; i++){
      if (board[row][i] === "q") {
        return false;
      }
    }
    // axe left
    for(var i=row, j=col; i>=0 && j>=0; i--, j--){
      if (board[i][j] === "q") {
        return false;
      }
    }
    // axe right 
    for(var i=row, j=col; j>=0 && i<n; i++, j--){
      if (board[i][j] === "q"){
        return false;
      }
    }
  
    return true;
  }
  
  
  const recurseNQ =function (board, col){
    if(col>=n){
      return true;
    }
  
    for(var i=0; i<n; i++){
      if(isSafe(board, i, col)){
        board[i][col]="q";
  
        if(recurseNQ(board, col+1)===true)
          return true;
  
        board[i][col]="-";
      }
    }
    return false;
  }
  
  
  const ex5 =function (){
    var board = generateBoard(n);
    if(recurseNQ(board, 0)===false){
      console.log("No solution found");
      return false;
    }
    console.log(board);
  }
  
  const generateBoard =function (n){
    var board=[];
    for(var i=0; i<n; i++){
      board[i]=[];
      for(var j=0; j<n; j++){
        board[i][j]="-";
      }
    }
    return board;
  }
ex5();