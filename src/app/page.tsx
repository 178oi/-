import { Circle, X } from 'lucide-react';

const Home = () => {
  const board = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2],
  ];
  return (
    <div className='flex h-screen w-full items-center justify-center bg-slate-200'>
      <div className='flex size-96 flex-wrap rounded-lg bg-slate-400 shadow-xl'>
        {board.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className='flex size-32 items-center justify-center border-slate-300/30 ring-1'
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
