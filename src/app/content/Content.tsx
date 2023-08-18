import { Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/main';
import { Movie } from '../../pages/movie';

export const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
};
