import { useGetAtCinemaTodayMoviesQuery } from '../../shared/store/api/queries/moviesApi';
import { MovieSlider } from '../../entities/movieSlider';
import styles from './Main.module.scss';

export const Main = () => {
  const { data: atCinemaTodayMovies } = useGetAtCinemaTodayMoviesQuery();

  return (
    <div className={styles.main}>{atCinemaTodayMovies ? <MovieSlider data={atCinemaTodayMovies.results} /> : null}</div>
  );
};
