import { Link } from 'react-router-dom';
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

export const MainSidebar = () => (
  <div className={styles.mainSidebar}>
    <h1>DEMO</h1>

    <div className={styles.mainMenu}>
      <h3 className={styles.title}>Menu</h3>

      <ul className={styles.list}>
        <li className={styles.item} key="home">
          <Link className={styles.link} to="/">
            <span className={styles.icon}>
              <HomeFilled />
            </span>
            Home
          </Link>
        </li>
        <li className={styles.item} key="discover">
          <Link className={styles.link} to="/discover">
            <span className={styles.icon}>
              <CompassFilled />
            </span>
            Discover
          </Link>
        </li>
        <li className={styles.item} key="freshMovies">
          <Link className={styles.link} to="/freshMovies">
            <span className={styles.icon}>
              <ReloadOutlined />
            </span>
            Fresh movies
          </Link>
        </li>
        <li className={styles.item} key="trending">
          <Link className={styles.link} to="/trending">
            <span className={styles.icon}>
              <FireFilled />
            </span>
            Trending
          </Link>
        </li>
      </ul>
    </div>

    <div className={styles.mainMenu}>
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
      <h3 className={styles.title}>General</h3>

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
);
