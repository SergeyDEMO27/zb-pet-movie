import { MovieReviews as MovieReviewsType } from '../../shared/types';
import { avatarSize } from './config';
import styles from './MovieReviews.module.scss';

interface MovieReviewsProps {
  data: MovieReviewsType;
}

export const MovieReviews = ({ data }: MovieReviewsProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  return (
    <ul className={styles.reviews}>
      {data.results.map(item => (
        <li className={styles.reviewsItem} key={item.id}>
          <div className={styles.reviewsContainer}>
            <div className={styles.reviewsWrapper}>
              <div className={styles.avatar}>
                {item?.author_details?.avatar_path ? (
                  <img
                    className={styles.reviewsImage}
                    src={`${IMAGE_URL}${avatarSize}${item.author_details.avatar_path}`}
                    alt="avatar"
                  />
                ) : (
                  <div className={styles.reviewsImage}></div>
                )}
              </div>
              <span className={styles.reviewsAuthor}>{item?.author_details?.username || '-'}</span>
            </div>
            <span className={styles.reviewsDate}>{item?.created_at || ''}</span>
          </div>

          <p>{item?.content || '-'}</p>
        </li>
      ))}
    </ul>
  );
};
