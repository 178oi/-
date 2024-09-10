'use client';
import { useState } from 'react';

const Home = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [turn, setTurn] = useState(1);

  const handleClick = (x: number, y: number) => {
    if (board[y][x] !== 0) {
      return;
    }
    const cloneBoard = structuredClone(board);
    cloneBoard[y][x] = turn;
    if (turn === 1) {
      setTurn(2);
    } else {
      setTurn(1);
    }
    setBoard(cloneBoard);
  };
  return (
    <div className='flex h-screen w-full items-center justify-center bg-slate-200'>
      <div className='flex size-72 flex-wrap bg-green-600 shadow-xl'>
        {board.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className='flex size-8 items-center justify-center border border-black'
              onClick={() => handleClick(x, y)}
            >
              {cell === 1 && <div className='size-6 rounded-full bg-white'></div>}
              {cell === 2 && <div className='size-6 rounded-full bg-black'></div>}
            </div>
          )),
        )}
      </div>
    </div>
  );
};
export default Home;
