import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeFilled,
  CompassFilled,
  ReloadOutlined,
  FireFilled,
  SmileFilled,
  HeartFilled,
  ReadFilled,
  SearchOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { movieGenres, movieGenresIds } from './config';
import styles from './MainSidebar.module.scss';

export const MainSidebar = () => {
  const location = useLocation();
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMenu(e.target.checked);
  };

  return (
    <div className={styles.mainSidebar}>
      <div className={`${styles.head} ${isMenu ? styles.headActive : ''}`}>
        <h1>
          <label htmlFor="menuCheck">D</label>
        </h1>
        <input id="menuCheck" type="checkbox" onChange={handleMenu} />
      </div>

      <div className={`${styles.wrapper} ${isMenu ? '' : styles.wrapperHide}`}>
        <div className={styles.mainMenu}>
          <h3 className={styles.title}>Menu</h3>

          <ul className={styles.list}>
            <li className={`${styles.item} ${location.pathname === '/' ? styles.itemActive : ''}`} key="home">
              <Link className={styles.link} to="/">
                <span className={styles.icon}>
                  <HomeFilled />
                </span>
                Home
              </Link>
            </li>
            <li
              className={`${styles.item} ${location.pathname === '/discover' ? styles.itemActive : ''}`}
              key="discover">
              <Link className={styles.link} to="/discover">
                <span className={styles.icon}>
                  <CompassFilled />
                </span>
                Discover
              </Link>
            </li>
            <li className={`${styles.item} ${location.pathname === '/top' ? styles.itemActive : ''}`} key="topMovies">
              <Link className={styles.link} to="/top">
                <span className={styles.icon}>
                  <ReloadOutlined />
                </span>
                Top movies
              </Link>
            </li>
            <li
              className={`${styles.item} ${location.pathname === '/trending' ? styles.itemActive : ''}`}
              key="trending">
              <Link className={styles.link} to="/trending">
                <span className={styles.icon}>
                  <FireFilled />
                </span>
                Trending
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${styles.mainMenu} ${styles.mainGenres}`}>
          <h3 className={styles.title}>Popular genres</h3>

          <ul className={styles.list}>
            <li
              className={`${styles.item} ${
                location.pathname === `/movies/${movieGenres.COMEDY}` ? styles.itemActive : ''
              }`}
              key={movieGenres.COMEDY}>
              <Link
                className={styles.link}
                to={`/movies/${movieGenres.COMEDY}`}
                state={{ id: movieGenresIds.COMEDY, title: movieGenres.COMEDY }}>
                <span className={styles.icon}>
                  <SmileFilled />
                </span>
                {movieGenres.COMEDY}
              </Link>
            </li>
            <li
              className={`${styles.item} ${
                location.pathname === `/movies/${movieGenres.MYSTERY}` ? styles.itemActive : ''
              }`}
              key={movieGenres.MYSTERY}>
              <Link
                className={styles.link}
                to={`/movies/${movieGenres.MYSTERY}`}
                state={{ id: movieGenresIds.MYSTERY, title: movieGenres.MYSTERY }}>
                <span className={styles.icon}>
                  <SearchOutlined />
                </span>
                {movieGenres.MYSTERY}
              </Link>
            </li>
            <li
              className={`${styles.item} ${
                location.pathname === `/movies/${movieGenres.HISTORY}` ? styles.itemActive : ''
              }`}
              key={movieGenres.HISTORY}>
              <Link
                className={styles.link}
                to={`/movies/${movieGenres.HISTORY}`}
                state={{ id: movieGenresIds.HISTORY, title: movieGenres.HISTORY }}>
                <span className={styles.icon}>
                  <ReadFilled />
                </span>
                {movieGenres.HISTORY}
              </Link>
            </li>
            <li
              className={`${styles.item} ${
                location.pathname === `/movies/${movieGenres.ROMANCE}` ? styles.itemActive : ''
              }`}
              key={movieGenres.ROMANCE}>
              <Link
                className={styles.link}
                to={`/movies/${movieGenres.ROMANCE}`}
                state={{ id: movieGenresIds.ROMANCE, title: movieGenres.ROMANCE }}>
                <span className={styles.icon}>
                  <HeartFilled />
                </span>
                {movieGenres.ROMANCE}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.mainMenu}>
          <h3 className={`${styles.title} ${styles.general}`}>General</h3>

          <ul className={styles.list}>
            <li className={styles.item} key="login">
              <Link className={styles.link} to="/">
                <span className={styles.icon}>
                  <LoginOutlined />
                </span>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
