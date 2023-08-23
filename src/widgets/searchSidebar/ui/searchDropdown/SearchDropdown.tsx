import { useState } from 'react';
import { Link } from 'react-router-dom';
import { posterSize } from './config';
import { FilteredData } from '../../../../shared/types';
import styles from './SearchDropdown.module.scss';

interface SearchDropdownProps {
  searchResult: FilteredData;
}

export const SearchDropdown = ({ searchResult }: SearchDropdownProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const [searchValue, setSearchValue] = useState('');
  const data = searchResult.results;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className={styles.searchDropdown}>
      {data?.movie?.length ? (
        <ul className={styles.list}>
          {data.movie.map(item => {
            return (
              <li className={styles.item} key={item.id}>
                <Link to={`/movie/${item.id}`}>
                  <img src={`${IMAGE_URL}${posterSize}${item?.poster_path}`} alt="" />
                  <div className={styles.wrapper}>
                    <p>{item?.title}</p>
                    <p>
                      {item?.vote_average} {item?.original_title} {item?.release_date}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}

      {data?.tv?.length ? (
        <ul className={styles.list}>
          {data?.tv.map(item => {
            return (
              <li className={styles.item} key={item.id}>
                <img src={`${IMAGE_URL}${posterSize}${item?.poster_path}`} alt="" />
                <div className={styles.wrapper}>
                  <p>{item?.name}</p>
                  <p>
                    {item?.vote_average} {item?.original_name} {item?.first_air_date}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}

      {data?.person?.length ? (
        <ul className={styles.list}>
          {data?.person.map(item => {
            return (
              <li className={styles.item} key={item.id}>
                <img src={`${IMAGE_URL}${posterSize}${item?.profile_path}`} alt="" />
                <div className={styles.wrapper}>
                  <p>{item?.name}</p>
                  <p>{item?.known_for_department}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
};
