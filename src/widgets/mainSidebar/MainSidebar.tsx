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
import styles from './MainSidebar.module.scss';
import React, { useState } from 'react';

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
            <li className={styles.item} key="comedy">
              <Link className={styles.link} to="/">
                <span className={styles.icon}>
                  <SmileFilled />
                </span>
                Comedy
              </Link>
            </li>
            <li className={styles.item} key="mystery">
              <Link className={styles.link} to="/">
                <span className={styles.icon}>
                  <SearchOutlined />
                </span>
                Mystery
              </Link>
            </li>
            <li className={styles.item} key="biography">
              <Link className={styles.link} to="/">
                <span className={styles.icon}>
                  <ReadFilled />
                </span>
                Biography
              </Link>
            </li>
            <li className={styles.item} key="romance">
              <Link className={styles.link} to="/">
                <span className={styles.icon}>
                  <HeartFilled />
                </span>
                Romance
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
