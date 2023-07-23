import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import Showtime from './Showtime';
import BookingModal from './BookingModal';

import { MOVIES } from '../../helpers/constants';
import { SHOWTIMES } from '../../helpers/constants';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { width, height } = useWindowSize()
  const [movie, setMovie] = useState();
  const [showtimes, setShowtimes] = useState([]);
  const [halls, setHalls] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedShowtime, setSelectedShowtime] = useState({});
  const [celebration, setCelebration] = useState(false);

  useEffect(() => {
    if (movieId) {
      const movieData = MOVIES.find(el => el.id === movieId);
      setMovie(movieData);

      const showtimesData = SHOWTIMES.filter(el => el.movieId === movieId);
      setShowtimes(showtimesData);

      const hallsData = showtimesData.map(el => el.hall);
      const uniqueHalls = hallsData.reduce(
        (unique, item) => (unique.find(el => el.id === item.id) ? unique : [...unique, item]),
        [],
      );
      setHalls(uniqueHalls);
    } else {
      setMovie(null);
      setShowtimes([]);
      setHalls([]);
    }
  }, [movieId]);

  useEffect(() => {
    if (celebration) {
      setTimeout(() => {
        setCelebration(false);
      }, 5000);
    }
  }, [celebration])

  const filterShowtimes = (hallId) => {
    return showtimes.filter(sh => sh.hall.id === hallId);
  }

  const handleShowtimeClick = (showtimeId) => {
    const showtimeData = SHOWTIMES.find(el => el.id === showtimeId);
    setSelectedShowtime(showtimeData);
    setOpen(true);
  }

  const handleConfirmClick = () => {
    toast('Your booking has been confirmed.', {
      style: {
        backgroundColor: 'rgb(13 148 136)',
        color: '#FFFFFF',
      },
    });

    setOpen(false);
    setCelebration(true);
  }

  if (!movie) {
    return null;
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-5">
        <div className="flex mb-8">
          <div className="border border-solid border-slate-300 rounded p-2 mr-4">
            <img src={movie.image} alt={movie.name} />
          </div>

          <div>
            <h4 className="text-3xl mb-4 font-semibold line-clamp-1">{movie.name}</h4>
            <div className="mb-2">
              <span className="text-slate-800 font-semibold mr-2">Language:</span>
              <span className="text-slate-500">{movie.language.name}</span>
            </div>
            <div className="mb-2">
              <span className="text-slate-800 font-semibold mr-2">Duration:</span>
              <span className="text-slate-500">{movie.duration} Mins</span>
            </div>
          </div>
        </div>

        <div>
          {halls.map(hall => {
            return (
              <div key={hall.id} className="flex mb-5">
                <div className="w-32 flex flex-col">
                  <span className="font-semibold">{hall.name}</span>
                  <span className="text-sm italic text-slate-500">{hall.place}</span>
                </div>
                <div className="w-full flex overflow-x-auto">
                  {filterShowtimes(hall.id).map(showtime => {
                    return (
                      <Showtime
                        showtime={showtime}
                        key={showtime.id}
                        handleShowtimeClick={handleShowtimeClick}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <BookingModal
        open={open}
        setOpen={setOpen}
        selectedShowtime={selectedShowtime}
        handleConfirmClick={handleConfirmClick}
      />

      <Toaster />

      {celebration && (
        <Confetti
          width={width}
          height={height}
        />
      )}
    </>
  );
}

export default MovieDetails;
