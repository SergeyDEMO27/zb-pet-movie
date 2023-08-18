import { mockMovies as movies } from './config';
import styles from './SearchSidebar.module.scss';

export const SearchSidebar = () => (
  <section className={styles.searchSidebar}>
    <h2>Search Sidebar</h2>
    <input className={styles.search} type="search" placeholder="Search" />

    <div>
      <p className={styles.popularTitle}>Popular movies</p>
      {movies ? (
        <ul className={styles.moviesList}>
          {movies.map(movie => {
            return (
              <li className={styles.movie} key={movie.id}>
                <img className={styles.image} src={movie.image} alt="" />
                <div className={styles.wrapper}>
                  <p className={styles.movieTitle}>{movie?.title || '-'}</p>
                  <p className={styles.genres}>{movie?.genres?.length ? movie.genres.join(', ') : '-'}</p>
                  <p className={styles.rating}>
                    <span className={styles.icon}>
                      <img src="" alt="" />
                    </span>
                    {movie?.rating || '?'}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  </section>
);
