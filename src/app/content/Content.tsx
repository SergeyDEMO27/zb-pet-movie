import { Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/main';
import { Movie } from '../../pages/movie';
import { Person } from '../../pages/person';
import { Tv } from '../../pages/tv';
import { Discover } from '../../pages/discover';
import { Trending } from '../../pages/trending';
import { TopMovies } from '../../pages/topMovies';
import { SelectedGenreMovies } from '../../pages/selectGenreMovie';

export const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movie/:id/*" element={<Movie />} />
      <Route path="/tv/:id/*" element={<Tv />} />
      <Route path="/person/:id/*" element={<Person />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/top" element={<TopMovies />} />
      <Route path="/movies/*" element={<SelectedGenreMovies />} />
    </Routes>
  );
};
