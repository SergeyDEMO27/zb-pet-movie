import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../shared/store/api/queries/moviesApi';
import styles from './Tv.module.scss';

export const Tv = () => {
  const { id } = useParams<{ id: string }>();
  // const { data: movie } = useGetMovieQuery({ movie_id: id || '' });

  return (
    <div className={styles.movie}>
      {true ? (
        <div></div> // <div>
      ) : (
        'TV DID NOT FOUND'
      )}
    </div>
  );
};
