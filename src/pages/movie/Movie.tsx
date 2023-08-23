import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../shared/store/api/queries/moviesApi';
import styles from './Movie.module.scss';

export const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie } = useGetMovieQuery({ movie_id: id || '' });

  return <div className={styles.movie}>MOVIE PAGE {id}</div>;
};
