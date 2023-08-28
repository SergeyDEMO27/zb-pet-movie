import { Link } from 'react-router-dom';
import {
  useGetMoviesAtCinemaTodayQuery,
  useGetMoviesPopularQuery,
  useGetMoviesTopRatedQuery,
} from '../../shared/store/api/queries/moviesApi';
import { StarFilled } from '@ant-design/icons';
import { MovieSlider } from '../../entities/movieSlider';
import { posterSize } from './config';
import { getRandomNumber } from '../../shared/lib';
import { imageSliderType, darkGradient } from '../../shared/config';
import styles from './Main.module.scss';

export const Main = () => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const { data: moviesAtCinema } = useGetMoviesAtCinemaTodayQuery();
  const { data: moviesPopular } = useGetMoviesPopularQuery();
  const { data: moviesTopRated } = useGetMoviesTopRatedQuery({ pageNumber: 1 });

  const randomTopMovie = moviesTopRated
    ? moviesTopRated.results[getRandomNumber(0, moviesTopRated.results.length - 1)]
    : null;

  return (
    <div className={styles.main}>
      {randomTopMovie ? (
        <div className={styles.randomMovie}>
          <div
            className={styles.picture}
            style={{
              backgroundImage: `${darkGradient}, url(${`${IMAGE_URL}${posterSize}${randomTopMovie.backdrop_path}`})`,
            }}>
            <div>
              <p className={styles.movieTitle}>{randomTopMovie.title || '-'}</p>
              <Link className={styles.movieLink} to={`/movie/${randomTopMovie.id}`}>
                <button>more</button>
              </Link>
              <p className={styles.movieOverview}>{randomTopMovie.overview || '-'}</p>
            </div>
            <p className={styles.rating}>
              <span className={styles.icon}>
                <StarFilled />
              </span>
              {randomTopMovie?.vote_average ? Math.round(randomTopMovie.vote_average * 10) / 10 : '?'}
            </p>
          </div>
        </div>
      ) : null}

      {moviesAtCinema ? (
        <>
          <h2 className={styles.title}>Now Showing</h2>
          <MovieSlider data={moviesAtCinema.results} sliderType={imageSliderType.MOVIE} />
        </>
      ) : null}

      {moviesPopular ? (
        <>
          <h2 className={styles.title}>Popular</h2>
          <MovieSlider data={moviesPopular.results} sliderType={imageSliderType.MOVIE} />
        </>
      ) : null}

      {moviesTopRated ? (
        <>
          <h2 className={styles.title}>Top Rated</h2>
          <MovieSlider data={moviesTopRated.results} sliderType={imageSliderType.MOVIE} />
        </>
      ) : null}
    </div>
  );
};
