import { useState } from 'react';
import { useGetPopularMoviesQuery } from '../../shared/store/api/queries/moviesApi';
import { useGetSearchResultsQuery } from '../../shared/store/api/queries/searchApi';
import { SearchDropdown } from './ui/searchDropdown';
import { posterSize } from './config';
import styles from './SearchSidebar.module.scss';

export const SearchSidebar = () => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const [searchValue, setSearchValue] = useState('');
  const { data: popularMovies } = useGetPopularMoviesQuery();
  const { data: searchResult } = useGetSearchResultsQuery({ query: searchValue });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className={styles.searchSidebar}>
      <div className={styles.searchWrapper}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
        {searchResult ? <SearchDropdown searchResult={searchResult} /> : null}
      </div>

      <div>
        <p className={styles.popularTitle}>Popular movies</p>
        {popularMovies?.results ? (
          <ul className={styles.moviesList}>
            {popularMovies.results.map(movie => {
              return (
                <li className={styles.movie} key={movie.id}>
                  <img className={styles.image} src={`${IMAGE_URL}${posterSize}${movie?.poster_path}`} alt="" />
                  <div className={styles.wrapper}>
                    <p className={styles.movieTitle}>{movie?.title || '-'}</p>
                    <p className={styles.genres}>{movie?.genre_ids?.length ? movie.genre_ids.join(', ') : '-'}</p>
                    <p className={styles.rating}>
                      <span className={styles.icon}>
                        <img src="" alt="" />
                      </span>
                      {movie?.vote_average || '?'}
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
};
