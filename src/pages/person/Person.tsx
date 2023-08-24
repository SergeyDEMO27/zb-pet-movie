import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../shared/store/api/queries/moviesApi';
import styles from './Person.module.scss';

export const Person = () => {
  const { id } = useParams<{ id: string }>();
  // const { data: movie } = useGetMovieQuery({ movie_id: id || '' });

  return <div className={styles.movie}>{true ? <div>personId {id}</div> : 'PERSON DID NOT FOUND'}</div>;
};
