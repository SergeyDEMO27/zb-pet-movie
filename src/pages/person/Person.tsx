import { useParams } from 'react-router-dom';
import {
  useGetPersonQuery,
  useGetPersonImagesQuery,
  useGetPersonSocialQuery,
  useGetPersonMovieCreditsQuery,
} from '../../shared/store/api/queries/personApi';
import { Typography } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons';
import { MovieSlider } from '../../entities/movieSlider';
import { ImageSlider } from '../../entities/imageSlider';
import dayjs from 'dayjs';
import { imageSliderType } from '../../shared/config';
import styles from './Person.module.scss';

export const Person = () => {
  const { id } = useParams<{ id: string }>();
  const { data: person, isError, isLoading } = useGetPersonQuery({ person_id: id || '' });
  const { data: personImages } = useGetPersonImagesQuery({ person_id: id || '' });
  const { data: personSocial } = useGetPersonSocialQuery({ person_id: id || '' });
  const { data: personMovieCredits } = useGetPersonMovieCreditsQuery({ person_id: id || '' });

  return (
    <div className={styles.person}>
      {person ? (
        <div>
          <div className={styles.head}>
            <div className={styles.headWrapper}>
              <div
                className={styles.headImage}
                style={{
                  backgroundImage: `url(${`https://image.tmdb.org/t/p/w500/${person.profile_path}`})`,
                }}
              />

              <div className={styles.social}>
                {personSocial?.facebook_id ? (
                  <a href={`https://www.facebook.com/${personSocial.facebook_id}`}>
                    <FacebookFilled />
                  </a>
                ) : null}
                {personSocial?.instagram_id ? (
                  <a href={`https://www.instagram.com/${personSocial.instagram_id}`}>
                    <InstagramFilled />
                  </a>
                ) : null}
                {personSocial?.twitter_id ? (
                  <a href={`https://www.twitter.com/${personSocial.twitter_id}`}>
                    <TwitterSquareFilled />
                  </a>
                ) : null}
                {personSocial?.youtube_id ? (
                  <a href={`https://www.twitter.com/${personSocial.youtube_id}`}>
                    <YoutubeFilled />
                  </a>
                ) : null}
              </div>
            </div>

            <div className={styles.wrapper}>
              <p className={styles.title}>{person.name}</p>
              <p className={styles.headInfo}>
                Career: <span>{person.known_for_department}</span>
              </p>
              <p className={styles.headInfo}>
                Birthday: <span> {person?.birthday ? dayjs(person?.birthday).format('DD MMMM YYYY') : ''}</span>
              </p>
              {person?.deathday ? (
                <p className={styles.headInfo}>
                  Deathday: <span>{dayjs(person?.birthday).format('DD MMMM YYYY')}</span>
                </p>
              ) : null}
              <p className={styles.headInfo}>
                Place of Birth: <span>{person.place_of_birth}</span>
              </p>
            </div>
          </div>

          <div className={styles.description} key={person.id}>
            <Typography.Paragraph
              ellipsis={{
                rows: 3,
                expandable: true,
                symbol: 'more',
              }}>
              {person?.biography || '-'}
            </Typography.Paragraph>
          </div>

          {personMovieCredits?.cast?.length ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Known For</h3>

              <MovieSlider data={personMovieCredits.cast.slice(0, 20)} sliderType={imageSliderType.MOVIE} />
            </div>
          ) : null}

          {personImages ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Images</h3>

              <ImageSlider data={personImages.profiles} imageType="person" />
            </div>
          ) : null}
        </div>
      ) : (
        'MOVIE DID NOT FOUND'
      )}
    </div>
  );
};
