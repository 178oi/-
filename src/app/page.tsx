'use client';
import { Circle, X } from 'lucide-react';
import { useState } from 'react';

const checkWinner = (board: number[][]) => {
  const line1 = board[0];
  if (line1[0] === line1[1] && line1[1] === line1[2]) {
    if (line1[0] === 0) return null;
    return line1[0];
  }
  return null;
};

const Home = () => {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const [turn, setTurn] = useState(1);

  const [winner, setWinner] = useState<number | null>(null);

  const handleClick = (x: number, y: number) => {
    if (board[y][x] !== 0) {
      return;
    }
    const cloneBoard = structuredClone(board);
    cloneBoard[y][x] = turn;
    setWinner(checkWinner(cloneBoard));
    if (turn === 1) {
      setTurn(2);
    } else {
      setTurn(1);
    }
    setBoard(cloneBoard);
  };

  return (
    <div className='flex h-screen w-full items-center justify-center bg-slate-200'>
      <div>{winner}</div>
      <div>
        {turn === 1 && <div className='text-lg text-red-600'>赤 </div>}
        {turn === 2 && <div className='text-lg text-blue-600'>青 </div>}
      </div>
      <div className='flex size-96 flex-wrap rounded-lg bg-slate-400 shadow-xl'>
        {board.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className='flex size-32 items-center justify-center border-slate-300/30 ring-1'
              onClick={() => handleClick(x, y)}
            >
              {/* <Circle size={120} color='red' />
              <X size={120} color='blue' /> */}
              {cell === 1 && <Circle size={120} color='red' />}
              {cell === 2 && <X size={120} color='blue' />}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
