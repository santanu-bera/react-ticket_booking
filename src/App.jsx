import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Halls from './pages/Halls';
import HallDetails from './pages/Halls/HallDetails';
import MovieDetails from './pages/Home/MovieDetails';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/:movieId" element={<MovieDetails />} />
          <Route path="halls" element={<Halls />} />
          <Route path="halls/:hallId" element={<HallDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
