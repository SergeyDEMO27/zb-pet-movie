import { useParams, Link } from 'react-router-dom';
import {
  useGetTvQuery,
  useGetTvCreditsQuery,
  useGetTvSimilarQuery,
  useGetTvImagesQuery,
  useGetTvReviewsQuery,
  useGetTvSocialQuery,
} from '../../shared/store/api/queries/tvApi';
import { MovieSlider } from '../../entities/movieSlider';
import { ImageSlider } from '../../entities/imageSlider';
import { MovieReviews } from '../../entities/movieReviews';
import { posterSize } from './config';
import { imageSliderType, darkGradient } from '../../shared/config';
import styles from './Tv.module.scss';

export const Tv = () => {
  const { id } = useParams<{ id: string }>();
  const { data: tv } = useGetTvQuery({ tv_id: id || '' });
  const { data: tvSocial } = useGetTvSocialQuery({ tv_id: id || '' });
  const { data: tvCredits } = useGetTvCreditsQuery({ tv_id: id || '' });
  const { data: tvSimilar } = useGetTvSimilarQuery({ tv_id: id || '' });
  const { data: tvImages } = useGetTvImagesQuery({ tv_id: id || '' });
  const { data: tvReviews } = useGetTvReviewsQuery({ tv_id: id || '' });
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  return (
    <div className={styles.tv}>
      {tv ? (
        <div>
          <div
            className={styles.head}
            style={{
              backgroundImage: `${darkGradient}, url(${`${IMAGE_URL}${posterSize}${tv.backdrop_path}`})`,
            }}>
            <div className={styles.wrapper}>
              <p className={styles.title}>{tv.name}</p>
              <p className={styles.production}>
                {tv.first_air_date.split('-')[0]} &#8226;{' '}
                {tv.production_countries.map((item, index) =>
                  index !== tv.production_countries.length - 1 ? `${item.name}, ` : `${item.name}`,
                )}{' '}
                &#8226; {tv.episode_run_time} min.
              </p>
              <p className={styles.headInfo}>
                Director:{' '}
                {tvCredits?.director ? (
                  <Link to={`/person/${tvCredits.director.id}`}>{tvCredits.director.name}</Link>
                ) : (
                  '-'
                )}
              </p>
              <p className={styles.headInfo}>
                Genres:{' '}
                {tv.genres.map((item, index) =>
                  index !== tv.genres.length - 1 ? (
                    <span key={item.id}> {item.name},</span>
                  ) : (
                    <span key={item.id}> {item.name}</span>
                  ),
                )}
              </p>
              <p className={styles.headInfo}>
                Number of seasons: <span>{tv.number_of_seasons || '-'}</span>
              </p>
              <p className={styles.headInfo}>
                Number of episodes: <span>{tv.number_of_episodes || '-'}</span>
              </p>
            </div>

            <p className={styles.rating}>{tv.vote_average}</p>
          </div>

          <div className={styles.social}>
            <a href={`https://www.facebook.com/${tvSocial?.facebook_id}`}>Facebook</a>
            <a href={`https://www.instagram.com/${tvSocial?.instagram_id}`}>Instagram</a>
            <a href={`https://www.twitter.com/${tvSocial?.twitter_id}`}>Twitter</a>
          </div>

          <div className={styles.description}>{tv?.overview || 'no description'}</div>

          {tvSimilar ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Similar</h3>

              <MovieSlider data={tvSimilar.results} sliderType={imageSliderType.TV} />
            </div>
          ) : null}

          {tvImages ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Images</h3>

              <ImageSlider data={tvImages.backdrops} imageType="movie" />
            </div>
          ) : null}

          {tvReviews ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Reviews</h3>

              <MovieReviews data={tvReviews} />
            </div>
          ) : null}
        </div>
      ) : (
        'TV DID NOT FOUND'
      )}
    </div>
  );
};
