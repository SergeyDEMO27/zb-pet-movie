import { useParams, Link } from 'react-router-dom';
import {
  useGetMovieQuery,
  useGetMovieCreditsQuery,
  useGetMovieSimilarQuery,
  useGetMovieImagesQuery,
  useGetMovieReviewsQuery,
  useGetMovieSocialQuery,
  useGetMovieVideosQuery,
} from '../../shared/store/api/queries/moviesApi';
import { Typography } from 'antd';
import { StarFilled, FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';
import { MovieSlider } from '../../entities/movieSlider';
import { ImageSlider } from '../../entities/imageSlider';
import { VideoSlider } from '../../entities/videoSlider';
import { MovieReviews } from '../../entities/movieReviews';
import { priceNormalizer } from '../../shared/lib';
import { posterSize } from './config';
import { imageSliderType, darkGradient } from '../../shared/config';
import styles from './Movie.module.scss';

export const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isError, isLoading } = useGetMovieQuery({ movie_id: id || '' });
  const { data: movieSocial } = useGetMovieSocialQuery({ movie_id: id || '' });
  const { data: movieCredits } = useGetMovieCreditsQuery({ movie_id: id || '' });
  const { data: movieSimilar } = useGetMovieSimilarQuery({ movie_id: id || '' });
  const { data: movieImages } = useGetMovieImagesQuery({ movie_id: id || '' });
  const { data: movieReviews } = useGetMovieReviewsQuery({ movie_id: id || '' });
  const { data: movieVideos } = useGetMovieVideosQuery({ movie_id: id || '' });
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  return (
    <div className={styles.movie}>
      {movie ? (
        <div>
          <div
            className={styles.head}
            style={{
              backgroundImage: `${darkGradient}, url(${`${IMAGE_URL}${posterSize}${movie.backdrop_path}`})`,
            }}>
            <div className={styles.wrapper}>
              <p className={styles.title}>{movie.title}</p>
              <p className={styles.production}>
                {movie?.release_date?.split('-')?.[0] || '-'} &#8226;{' '}
                {movie?.production_countries?.length
                  ? movie.production_countries.map((item, index) =>
                      index !== movie.production_countries.length - 1 ? `${item.name}, ` : `${item.name}`,
                    )
                  : '-'}{' '}
                &#8226; {movie?.runtime ? `${movie.runtime} min.` : '-'}
              </p>
              <p className={styles.headInfo}>
                Director:{' '}
                {movieCredits?.director ? (
                  <Link to={`/person/${movieCredits.director.id}`}>{movieCredits.director.name}</Link>
                ) : (
                  '-'
                )}
              </p>
              <p className={styles.headInfo}>
                Genres:{' '}
                {movie?.genres?.length
                  ? movie.genres.map((item, index) =>
                      index !== movie.genres.length - 1 ? (
                        <span key={item.id}> {item.name},</span>
                      ) : (
                        <span key={item.id}> {item.name}</span>
                      ),
                    )
                  : '-'}
              </p>
              <p className={styles.headInfo}>
                Budget: {movie?.budget ? <span>&#36; {priceNormalizer(movie.budget)}</span> : '-'}
              </p>
              <p className={styles.headInfo}>
                Revenue: {movie?.revenue ? <span>&#36; {priceNormalizer(movie.revenue)}</span> : '-'}
              </p>
            </div>

            <p className={styles.rating}>
              <span className={styles.icon}>
                <StarFilled />
              </span>
              {movie?.vote_average ? Math.round(movie.vote_average * 10) / 10 : '?'}
            </p>
          </div>

          <div className={styles.social}>
            {movieSocial?.facebook_id ? (
              <a href={`https://www.facebook.com/${movieSocial.facebook_id}`}>
                <FacebookFilled />
              </a>
            ) : null}
            {movieSocial?.instagram_id ? (
              <a href={`https://www.instagram.com/${movieSocial.instagram_id}`}>
                <InstagramFilled />
              </a>
            ) : null}
            {movieSocial?.twitter_id ? (
              <a href={`https://www.twitter.com/${movieSocial.twitter_id}`}>
                <TwitterSquareFilled />
              </a>
            ) : null}
          </div>

          <div className={styles.description} key={movie.id}>
            <Typography.Paragraph
              ellipsis={{
                rows: 3,
                expandable: true,
                symbol: 'more',
              }}>
              {movie?.overview || '-'}
            </Typography.Paragraph>
          </div>

          {movieCredits?.cast?.length ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Cast</h3>

              <MovieSlider data={movieCredits.cast.slice(0, 20)} sliderType={imageSliderType.PERSON} />
            </div>
          ) : null}

          {movieSimilar?.results?.length ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Similar</h3>

              <MovieSlider data={movieSimilar.results} sliderType={imageSliderType.MOVIE} />
            </div>
          ) : null}

          {movieImages?.backdrops?.length ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Images</h3>

              <ImageSlider data={movieImages.backdrops} imageType="movie" />
            </div>
          ) : null}

          {movieVideos?.results?.length ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Videos</h3>

              <VideoSlider data={movieVideos} />
            </div>
          ) : null}

          {movieReviews?.results?.length ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Reviews</h3>

              <MovieReviews data={movieReviews} />
            </div>
          ) : null}
        </div>
      ) : (
        'MOVIE DID NOT FOUND'
      )}
    </div>
  );
};
