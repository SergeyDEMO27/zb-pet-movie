import { Link } from 'react-router-dom';
import { useGetMoviesPopularQuery } from '../../shared/store/api/queries/moviesApi';
import { StarFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
import { posterSize } from './config';
import styles from './RightSidebar.module.scss';

export const RightSidebar = () => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const { data: popularMovies } = useGetMoviesPopularQuery();

  return (
    <section className={styles.rightSidebar}>
      <div>
        <p className={styles.popularTitle}>Popular movies</p>
        {popularMovies?.results ? (
          <ul className={styles.moviesList}>
            {popularMovies.results.map(movie => {
              return (
                <li className={styles.movie} key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <div className={styles.picture}>
                      <img className={styles.image} src={`${IMAGE_URL}${posterSize}${movie?.poster_path}`} alt="" />
                    </div>
                    <div className={styles.wrapper}>
                      <p className={styles.movieTitle}>{movie?.title || '-'}</p>
                      <p className={styles.date}>
                        {movie?.release_date ? dayjs(movie.release_date).format('YYYY') : ''}
                      </p>
                      <p className={styles.rating}>
                        <span className={styles.icon}>
                          <StarFilled />
                        </span>
                        {movie?.vote_average ? Math.round(movie.vote_average * 10) / 10 : '?'}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
};
