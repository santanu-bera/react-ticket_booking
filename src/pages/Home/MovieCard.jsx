import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <div className="border border-solid border-slate-300 rounded p-2">
        <img src={movie.image} alt={movie.name} />
        <h4 className="text-xl mt-2 mb-1 font-semibold line-clamp-1">{movie.name}</h4>
        <div className="flex justify-between">
          <span className="text-slate-500 text-md">{movie.language.name}</span>
          <span className="text-slate-500 italic text-md">{movie.duration} Mins</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
