import { Link } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';
import { posterSize } from './config';
import dayjs from 'dayjs';
import { roundToDecimal } from '../../../../shared/lib';
import { MovieCredits } from '../../../../shared/types';
import styles from './PersonWorks.module.scss';

interface PersonWorksProps {
  data: MovieCredits[];
}

export const PersonWorks = ({ data }: PersonWorksProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  return (
    <div className={styles.personWorks}>
      <ul className={styles.list}>
        {data.map(item => (
          <li key={item.id}>
            <Link className={styles.link} to={`/${item.video ? 'tv' : 'movie'}/${item.id}`}>
              <div className={styles.wrapper}>
                <div className={styles.picture}>
                  <img src={`${IMAGE_URL}${posterSize}${item?.poster_path}`} alt="" />
                </div>
                <div>
                  <p className={styles.title}>{item?.title || '-'}</p>
                  <p className={styles.character}>{item?.character || item?.job || '-'}</p>
                  <p className={styles.rating}>
                    <span className={styles.icon}>
                      <StarFilled />
                    </span>
                    {item?.vote_average ? roundToDecimal(item.vote_average) : '?'}
                  </p>
                </div>
              </div>
              <p>{item?.release_date ? dayjs(item.release_date).format('YYYY') : ''}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
