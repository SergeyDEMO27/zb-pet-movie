import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetDiscoverMoviesQuery } from '../../shared/store/api/queries/discoverApi';
import { MovieList } from '../../entities/movieList';
import styles from './SelectedGenreMovies.module.scss';

export const SelectedGenreMovies = () => {
  const location = useLocation();
  const { id, title } = location.state;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: movies,
    isError: isError,
    isLoading: isLoading,
  } = useGetDiscoverMoviesQuery({ with_genres: [id], page: currentPage });

  const handleChangePage = (value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.selectedGenreMovies}>
      <h2 className={styles.title}>
        <span>{title}</span> movies
      </h2>

      {movies ? <MovieList data={movies} listType="trending" handleChangePage={handleChangePage} /> : null}
    </div>
  );
};
