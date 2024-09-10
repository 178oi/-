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

    //周りを見るfor文
    for (const direction of DIRECTIONS) {
      const dx = direction[0];
      const dy = direction[1];
      if (cloneBoard[y + dy] === undefined) continue;

      //一個隣を見て違う色か判断してその先色を見る必要があるか判断
      if (enemyColor === cloneBoard[y + dy][x + dx]) {
        //その先を見るfor文
        for (let i = 2; i < 8; i++) {
          //盤面外の判断する必要のない部分を処理しないif文
          if (cloneBoard[y + dy * i] === undefined) break;
          //かけることによって方向を変えずにまっすぐ判断する
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
