import { useParams } from 'react-router-dom';
import {
  useGetPersonQuery,
  useGetPersonImagesQuery,
  useGetPersonSocialQuery,
  useGetPersonMovieCreditsQuery,
} from '../../shared/store/api/queries/personApi';
import { ImageSlider } from '../../entities/imageSlider';
import styles from './Person.module.scss';

export const Person = () => {
  const { id } = useParams<{ id: string }>();
  const { data: person } = useGetPersonQuery({ person_id: id || '' });
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
                  backgroundImage: `linear-gradient(0deg,rgb(20, 20, 20) 4%,rgba(20, 20, 20, 0.46) 100%), 
            url(${`https://image.tmdb.org/t/p/w500/${person.profile_path}`})`,
                }}
              />
              <div className={styles.social}>
                <a href={`https://www.facebook.com/${personSocial?.facebook_id}`}>Facebook</a>
                <a href={`https://www.instagram.com/${personSocial?.instagram_id}`}>Instagram</a>
                <a href={`https://www.tiktok.com/@${personSocial?.tiktok_id}`}>Tiktok</a>
                <a href={`https://www.twitter.com/${personSocial?.twitter_id}`}>Twitter</a>
                <a href={`https://www.youtube.com/${personSocial?.youtube_id}`}>Youtube</a>
              </div>
            </div>

            <div className={styles.wrapper}>
              <p className={styles.title}>{person.name}</p>
              <p className={styles.headInfo}>
                Career: <span>{person.known_for_department}</span>
              </p>
              <p className={styles.headInfo}>
                Birthday: <span>{person.birthday}</span>
              </p>
              {person?.deathday ? (
                <p className={styles.headInfo}>
                  Deathday: <span>{person.deathday}</span>
                </p>
              ) : null}
              <p className={styles.headInfo}>
                Place of Birth: <span>{person.place_of_birth}</span>
              </p>
            </div>
          </div>

          <div className={styles.description}>{person?.biography || 'no description'}</div>

          {/* {moviesSimilar ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Similar</h3>

              <MovieSlider data={moviesSimilar.results} />
            </div>
          ) : null} */}

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
