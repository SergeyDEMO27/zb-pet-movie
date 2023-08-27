import { useGetAtCinemaTodayMoviesQuery } from '../../shared/store/api/queries/moviesApi';
import { MovieSlider } from '../../entities/movieSlider';
import { imageSliderType } from '../../shared/config';
import styles from './Main.module.scss';

export const Main = () => {
  const { data: atCinemaTodayMovies } = useGetAtCinemaTodayMoviesQuery();

  return (
    <div className={styles.main}>
      {atCinemaTodayMovies ? (
        <>
          <h2 className={styles.title}>Now Showing</h2>
          <MovieSlider data={atCinemaTodayMovies.results} sliderType={imageSliderType.MOVIE} />
        </>
      ) : null}
    </div>
  );
};
