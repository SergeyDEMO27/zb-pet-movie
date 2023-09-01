import { Link } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
import { roundToDecimal } from '../../../../shared/lib';
import { posterSize } from './config';
import { FilteredData } from '../../../../shared/types';
import styles from './SearchDropdown.module.scss';

interface SearchDropdownProps {
  searchResult: FilteredData;
  handleOpenMovie: () => void;
}

export const SearchDropdown = ({ searchResult, handleOpenMovie }: SearchDropdownProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const data = searchResult.results;

  if (!data.movie && !data.tv && !data.person) return null;

  return (
    <section className={styles.searchDropdown}>
      {data?.movie?.length ? (
        <>
          <h3 className={styles.title}>Movie</h3>
          <ul className={styles.list}>
            {data.movie.map(item => {
              return (
                <li className={styles.item} key={item.id}>
                  <Link onClick={handleOpenMovie} to={`/movie/${item.id}`}>
                    <div className={styles.picture}>
                      <img className={styles.image} src={`${IMAGE_URL}${posterSize}${item?.poster_path}`} alt="" />
                    </div>
                    <div className={styles.wrapper}>
                      <p className={styles.movieTitle}>{item?.title || '-'}</p>
                      <p className={styles.date}>{item?.release_date ? dayjs(item.release_date).format('YYYY') : ''}</p>
                      <p className={styles.rating}>
                        <span className={styles.icon}>
                          <StarFilled />
                        </span>
                        {item?.vote_average ? roundToDecimal(item.vote_average) : '?'}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      {data?.tv?.length ? (
        <>
          <h3 className={styles.title}>Tv</h3>
          <ul className={styles.list}>
            {data?.tv.map(item => {
              return (
                <li className={styles.item} key={item.id}>
                  <Link onClick={handleOpenMovie} to={`/tv/${item.id}`}>
                    <div className={styles.picture}>
                      <img className={styles.image} src={`${IMAGE_URL}${posterSize}${item?.poster_path}`} alt="" />
                    </div>
                    <div className={styles.wrapper}>
                      <p className={styles.movieTitle}>{item?.name || '-'}</p>
                      <p className={styles.date}>
                        {item?.first_air_date ? dayjs(item.first_air_date).format('YYYY') : ''}
                      </p>
                      <p className={styles.rating}>
                        <span className={styles.icon}>
                          <StarFilled />
                        </span>
                        {item?.vote_average ? roundToDecimal(item.vote_average) : '?'}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      {data?.person?.length ? (
        <>
          <h3 className={styles.title}>Person</h3>
          <ul className={styles.list}>
            {data?.person.map(item => {
              return (
                <li className={styles.item} key={item.id}>
                  <Link onClick={handleOpenMovie} to={`/person/${item.id}`}>
                    <div className={styles.picture}>
                      <img className={styles.image} src={`${IMAGE_URL}${posterSize}${item?.profile_path}`} alt="" />
                    </div>
                    <div className={styles.wrapper}>
                      <p className={styles.movieTitle}>{item?.name || '-'}</p>
                      <p className={styles.date}>{item?.known_for_department || ''}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </section>
  );
};
