import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  useGetTvQuery,
  useGetTvCreditsQuery,
  useGetTvSimilarQuery,
  useGetTvImagesQuery,
  useGetTvReviewsQuery,
  useGetTvSocialQuery,
} from '../../shared/store/api/queries/tvApi';
import { Typography } from 'antd';
import { StarFilled, FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';
import { MovieSlider } from '../../entities/movieSlider';
import { ImageSlider } from '../../entities/imageSlider';
import { MovieReviews } from '../../entities/movieReviews';
import { DetailedInfo } from '../../entities/detailedInfo';
import { MainModal } from '../../shared/ui/mainModal';
import { roundToDecimal } from '../../shared/lib';
import { posterSize } from './config';
import { imageSliderType, darkGradient } from '../../shared/config';
import styles from './Tv.module.scss';

export const Tv = () => {
  const { id } = useParams<{ id: string }>();
  const { data: tv, isError, isLoading } = useGetTvQuery({ tv_id: id || '' });
  const { data: tvSocial } = useGetTvSocialQuery({ tv_id: id || '' });
  const { data: tvCredits } = useGetTvCreditsQuery({ tv_id: id || '' });
  const { data: tvSimilar } = useGetTvSimilarQuery({ tv_id: id || '' });
  const { data: tvImages } = useGetTvImagesQuery({ tv_id: id || '' });
  const { data: tvReviews } = useGetTvReviewsQuery({ tv_id: id || '' });
  const [isDetailed, setIsDetailed] = useState(false);
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  const handleDetailedModal = (value: boolean) => {
    setIsDetailed(value);
  };

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
                {tv.first_air_date?.split('-')?.[0] || '-'} &#8226;{' '}
                {tv?.production_countries?.length
                  ? tv.production_countries.map((item, index) =>
                      index !== tv.production_countries.length - 1 ? `${item.name}, ` : `${item.name}`,
                    )
                  : '-'}{' '}
                &#8226; {tv?.episode_run_time ? `${tv.episode_run_time} min.` : '-'}
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
                {tv?.genres?.length
                  ? tv.genres.map((item, index) =>
                      index !== tv.genres.length - 1 ? (
                        <span key={item.id}> {item.name},</span>
                      ) : (
                        <span key={item.id}> {item.name}</span>
                      ),
                    )
                  : '-'}
              </p>
              <p className={styles.headInfo}>
                Number of seasons: <span>{tv?.number_of_seasons || '-'}</span>
              </p>
              <p className={styles.headInfo}>
                Number of episodes: <span>{tv?.number_of_episodes || '-'}</span>
              </p>

              <button className={styles.more} type="button" onClick={() => handleDetailedModal(true)}>
                more info
              </button>
            </div>

            <p className={styles.rating}>
              <span className={styles.icon}>
                <StarFilled />
              </span>
              {tv?.vote_average ? roundToDecimal(tv.vote_average) : '?'}
            </p>
          </div>

          <div className={styles.social}>
            {tvSocial?.facebook_id ? (
              <a href={`https://www.facebook.com/${tvSocial.facebook_id}`}>
                <FacebookFilled />
              </a>
            ) : null}
            {tvSocial?.instagram_id ? (
              <a href={`https://www.instagram.com/${tvSocial.instagram_id}`}>
                <InstagramFilled />
              </a>
            ) : null}
            {tvSocial?.twitter_id ? (
              <a href={`https://www.twitter.com/${tvSocial.twitter_id}`}>
                <TwitterSquareFilled />
              </a>
            ) : null}
          </div>

          <div className={styles.description} key={tv.id}>
            <Typography.Paragraph
              ellipsis={{
                rows: 3,
                expandable: true,
                symbol: 'more',
              }}>
              {tv?.overview || '-'}
            </Typography.Paragraph>
          </div>

          {tvCredits?.cast?.length ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Cast</h3>

              <MovieSlider data={tvCredits.cast.slice(0, 20)} sliderType={imageSliderType.PERSON} />
            </div>
          ) : null}

          {tvSimilar ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Similar</h3>

              <MovieSlider data={tvSimilar.results} sliderType={imageSliderType.TV} />
            </div>
          ) : null}

          {tvImages?.backdrops?.length ? (
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

      <MainModal isOpen={isDetailed} closeHandler={() => handleDetailedModal(false)}>
        <DetailedInfo tv={tv} movieCredits={tvCredits} detailedType="tv" />
      </MainModal>
    </div>
  );
};
