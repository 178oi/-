const Home = () => {
  const board = [
    [0, 0, 0],
    [0, 2, 0],
    [0, 0, 0],
  ];
  return (
    <div className='flex h-screen w-full items-center justify-center bg-slate-200'>
      <div className='flex size-96 flex-wrap rounded-lg bg-slate-400 shadow-xl'>
        {board.map((row, y) =>
          row.map((cell, x) => (
            <div key={`${x}-${y}`} className='size-32 border-slate-300/30 ring-1'>
              {cell}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
