import { useState } from 'react';
import { useGetTrendingMovieQuery } from '../../shared/store/api/queries/trendingApi';
import { MovieList } from '../../entities/movieList';
import styles from './Trending.module.scss';

export const Trending = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: trending, isError, isLoading } = useGetTrendingMovieQuery({ pageNumber: currentPage });

  const handleChangePage = (value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.trending}>
      <h2 className={styles.title}>Trending movies</h2>

      {trending ? <MovieList data={trending} listType="trending" handleChangePage={handleChangePage} /> : null}
    </div>
  );
};
