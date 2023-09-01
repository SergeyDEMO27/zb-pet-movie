import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { posterSize } from './config';
import { priceNormalizer } from '../../shared/lib';
import { MovieDetailed, TvDetailed, Credits } from '../../shared/types';
import styles from './DetailedInfo.module.scss';
import { Tv } from '../../pages/tv';

interface DetailedInfoProps {
  movie?: MovieDetailed;
  tv?: TvDetailed;
  movieCredits?: Credits;
  detailedType: 'movie' | 'tv';
}

export const DetailedInfo = ({ movie, tv, movieCredits, detailedType }: DetailedInfoProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const movieCountries = (detailedType === 'movie' ? movie : tv)?.production_countries?.slice(0, 3) || [];
  const movieCompanies = (detailedType === 'movie' ? movie : tv)?.production_companies?.slice(0, 3) || [];

  return (
    <div className={styles.detailedInfo}>
      <div className={styles.picture}>
        <img
          className={styles.image}
          src={`${IMAGE_URL}${posterSize}${detailedType === 'movie' ? movie?.poster_path : tv?.poster_path}`}
          alt=""
        />
      </div>
      <div>
        <p className={styles.title}>
          {detailedType === 'movie' ? (
            <>
              {movie?.title || '-'} {movie?.release_date ? `(${dayjs(movie.release_date).format('YYYY')})` : ''}
            </>
          ) : (
            <>
              {tv?.name || '-'} {tv?.first_air_date ? `(${dayjs(tv.first_air_date).format('YYYY')})` : ''}
            </>
          )}
        </p>
        <div>
          <p className={styles.info}>
            Companies:{' '}
            <span>
              {movieCompanies.length
                ? movieCompanies.map((item, index) =>
                    index !== movieCompanies.length - 1 ? `${item.name}, ` : `${item.name}`,
                  )
                : '-'}
            </span>
          </p>
          <p className={styles.info}>
            Countries:{' '}
            <span>
              {movieCountries.length
                ? movieCountries.map((item, index) =>
                    index !== movieCountries.length - 1 ? `${item.name}, ` : `${item.name}`,
                  )
                : '-'}
            </span>
          </p>
          <p className={styles.info}>
            Original language:{' '}
            {detailedType === 'movie' ? (
              <span>{movie?.original_language || '-'}</span>
            ) : (
              <span>{tv?.original_language || '-'}</span>
            )}
          </p>
          <p className={styles.info}>
            Genres:{' '}
            {detailedType === 'movie' ? (
              <span>
                {movie?.genres?.length
                  ? movie.genres.map((item, index) =>
                      index !== movie.genres.length - 1 ? (
                        <span key={item.id}> {item.name},</span>
                      ) : (
                        <span key={item.id}> {item.name}</span>
                      ),
                    )
                  : '-'}
              </span>
            ) : (
              <span>
                {tv?.genres?.length
                  ? tv.genres.map((item, index) =>
                      index !== tv.genres.length - 1 ? (
                        <span key={item.id}> {item.name},</span>
                      ) : (
                        <span key={item.id}> {item.name}</span>
                      ),
                    )
                  : '-'}
              </span>
            )}
          </p>
          <p className={styles.info}>
            Director:{' '}
            {movieCredits?.director ? (
              <Link to={`/person/${movieCredits.director.id}`}>{movieCredits.director.name}</Link>
            ) : (
              '-'
            )}
          </p>
          <p className={styles.info}>
            Script:{' '}
            {movieCredits?.scriptWriters?.length
              ? movieCredits.scriptWriters.map((item, index) =>
                  index < (movieCredits?.scriptWriters?.length || 1) - 1 ? (
                    <Link key={item.id} to={`/person/${item.id}`}>
                      {item.name},{' '}
                    </Link>
                  ) : (
                    <Link key={item.id} to={`/person/${item.id}`}>
                      {item.name}
                    </Link>
                  ),
                )
              : '-'}
          </p>
          <p className={styles.info}>
            Composer:{' '}
            {movieCredits?.composers?.length
              ? movieCredits.composers.map((item, index) =>
                  index < (movieCredits?.composers?.length || 1) - 1 ? (
                    <Link key={item.id} to={`/person/${item.id}`}>
                      {item.name},{' '}
                    </Link>
                  ) : (
                    <Link key={item.id} to={`/person/${item.id}`}>
                      {item.name}
                    </Link>
                  ),
                )
              : '-'}
          </p>
          <p className={styles.info}>
            Operator:{' '}
            {movieCredits?.operators?.length
              ? movieCredits.operators.map((item, index) =>
                  index < (movieCredits?.operators?.length || 1) - 1 ? (
                    <Link key={item.id} to={`/person/${item.id}`}>
                      {item.name},{' '}
                    </Link>
                  ) : (
                    <Link key={item.id} to={`/person/${item.id}`}>
                      {item.name}
                    </Link>
                  ),
                )
              : '-'}
          </p>
          <p className={styles.info}>
            Tagline:{' '}
            {detailedType === 'movie' ? (
              <>{movie?.tagline ? <span>{movie.tagline}</span> : '-'}</>
            ) : (
              <>{tv?.tagline ? <span>{tv.tagline}</span> : '-'}</>
            )}
          </p>
          {detailedType === 'movie' ? (
            <p className={styles.info}>
              Budget: {movie?.budget ? <span>&#36;{priceNormalizer(movie.budget)}</span> : '-'}
            </p>
          ) : null}
          {detailedType === 'movie' ? (
            <p className={styles.info}>
              Revenue: {movie?.revenue ? <span>&#36;{priceNormalizer(movie.revenue)}</span> : '-'}
            </p>
          ) : null}
          <p className={styles.info}>
            Premiere:{' '}
            {detailedType === 'movie' ? (
              <>{movie?.release_date ? <span>{dayjs(movie.release_date).format('DD MMMM YYYY')}</span> : '-'}</>
            ) : (
              <>{tv?.first_air_date ? <span>{dayjs(tv.first_air_date).format('DD MMMM YYYY')}</span> : '-'}</>
            )}
          </p>
          <p className={styles.info}>Duration: {movie?.runtime ? <span>{movie.runtime} min.</span> : '-'}</p>
          {detailedType === 'tv' ? (
            <p className={styles.info}>Number of seasons: {<span>{tv?.number_of_seasons || '-'}</span>}</p>
          ) : null}
          {detailedType === 'tv' ? (
            <p className={styles.info}>Number of episodes: {<span>{tv?.number_of_episodes || '-'}</span>}</p>
          ) : null}
          {detailedType === 'tv' ? <p className={styles.info}>Status: {<span>{tv?.status || '-'}</span>}</p> : null}
        </div>
      </div>
    </div>
  );
};
