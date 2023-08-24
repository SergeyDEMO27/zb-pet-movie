import { Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/main';
import { Movie } from '../../pages/movie';
import { Person } from '../../pages/person';
import { Tv } from '../../pages/tv';

export const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movie/:id/*" element={<Movie />} />
      <Route path="/tv/:id/*" element={<Tv />} />
      <Route path="/person/:id/*" element={<Person />} />
    </Routes>
  );
};
