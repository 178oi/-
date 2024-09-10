'use client';
import { useState } from 'react';

const DIRECTIONS = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

const Home = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [turn, setTurn] = useState(1);

  const handleClick = (x: number, y: number) => {
    //すでに1か2があるとおけない
    if (board[y][x] !== 0) {
      return;
    }
    const enemyColor = 3 - turn;

    //クローンしてる
    const cloneBoard = structuredClone(board);

    //かこくなif文
    //８方向見ていって、もしenemyColorがあったら置いていいよ→下の三つ実行していいよ

    for (const direction of DIRECTIONS) {
      //direction [1, 0]
      const dx = direction[0];
      const dy = direction[1];
      //dx 1
      //dy 0
      if (cloneBoard[y + dy] === undefined) continue;
      if (enemyColor === cloneBoard[y + dy][x + dx]) {
        for (let i = 2; i < 8; i++) {
          if (cloneBoard[y + dy * i] === undefined) break;
          if (turn === cloneBoard[y + dy * i][x + dx * i]) {
            //石を置く
            cloneBoard[y][x] = turn;

            //turnを毎回変える
            setTurn(enemyColor);

            //更新してる
            setBoard(cloneBoard);

            return;
          }
        }
      }
    }
  };

  return (
    <div className='flex h-screen w-full items-center justify-center bg-slate-200'>
      <div className='flex size-64 flex-wrap bg-green-600 shadow-xl'>
        {board.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className='flex size-8 items-center justify-center border border-black'
              onClick={() => handleClick(x, y)}
            >
              {cell === 1 && <div className='size-6 rounded-full bg-black'></div>}
              {cell === 2 && <div className='size-6 rounded-full bg-white'></div>}
            </div>
          )),
        )}
      </div>
    </div>
  );
};
export default Home;
