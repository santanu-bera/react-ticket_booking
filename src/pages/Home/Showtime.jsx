import React from 'react';

const Showtime = ({ showtime, handleShowtimeClick }) => {
  return (
    <div className="cursor-pointer hover:bg-green-200 ease-out duration-300 border border-solid border-green-100 rounded px-4 py-2 flex flex-col items-center bg-green-100 flex-shrink-0 mr-4" onClick={() => handleShowtimeClick(showtime.id)}>
      <span className="font-semibold text-green-500">{showtime.time}</span>
      <span className="text-sm text-slate-400">{showtime.screen}</span>
    </div>
  );
}

export default Showtime;
