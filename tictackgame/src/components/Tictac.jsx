import React, { useState } from 'react'


const Tictac = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xTurn , setxTurn] = useState(true);
    const [win , setWin] = useState(null);
    const renderbtn = (index)=>{
        return(
        <button className='m-1 text-[24px] h-[100px] w-[100px] bg-slate-300' onClick={()=>handleClick(index)}>{board[index]}</button>
        )
    }
    const handleClick = (index) =>{
        if(board[index]!=null || win){
            return ;    
        }
        // console.log(index)
        const newBoard = [...board];
        newBoard[index] = xTurn?'X':'O';
        setBoard(newBoard);
        setxTurn(!xTurn);
        const ans = checkWinner(newBoard);
        console.log(ans[0]);
        if(ans){
            setWin(newBoard[ans[0]]);
        }
    }
    // Function to check for a winner
    function checkWinner(newBoard) {
        const winningCombinations = [
                [0, 1, 2], // Top row
                [3, 4, 5], // Middle row
                [6, 7, 8], // Bottom row
                [0, 3, 6], // Left column
                [1, 4, 7], // Middle column
                [2, 5, 8], // Right column
                [0, 4, 8], // Diagonal (top-left to bottom-right)
                [2, 4, 6], // Diagonal (top-right to bottom-left)
            ];
            for(let i=0;i<winningCombinations.length;i++){
            const [a,b,c]= winningCombinations[i]
            if(newBoard[a]==newBoard[b] && newBoard[b]==newBoard[c] ){
                return winningCombinations[i];
                
            }
            }
        return null;
    }
  return (
    <>
      <div className="relative flex flex-col top-[20%] board">
        <div className="flex items-center justify-center board-row">
          {renderbtn(0)}
          {renderbtn(1)}
          {renderbtn(2)}
        </div>
        <div className="flex items-center justify-center board-row ">
          {renderbtn(3)}
          {renderbtn(4)}
          {renderbtn(5)}
        </div>
        <div className="flex items-center justify-center board-row ">
          {renderbtn(6)}
          {renderbtn(7)}
          {renderbtn(8)}
        </div>
      </div>
      {win && <div className='relative text-3xl  text-center text-blue-800 bg-red-100 top-[30%] '  >winner of the game is {win}</div>}
    </>
  );
}

export default Tictac