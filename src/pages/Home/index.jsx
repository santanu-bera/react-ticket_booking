import React from 'react';

import MovieCard from './MovieCard';
import { MOVIES } from '../../helpers/constants';

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-5">
      <div className="grid grid-cols-4 gap-6">
        {MOVIES.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
}

export default Home;
