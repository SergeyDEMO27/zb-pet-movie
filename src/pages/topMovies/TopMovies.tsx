import { useState } from 'react';
import { useGetMoviesTopRatedQuery } from '../../shared/store/api/queries/moviesApi';
import { MovieList } from '../../entities/movieList';
import styles from './TopMovies.module.scss';

export const TopMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: moviesTop,
    isError,
    isLoading,
  } = useGetMoviesTopRatedQuery({
    pageNumber: currentPage,
  });

  const handleChangePage = (value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.trending}>
      <h2 className={styles.title}>Top movies</h2>

      {moviesTop ? <MovieList data={moviesTop} listType="trending" handleChangePage={handleChangePage} /> : null}
    </div>
  );
};
