import { useParams, Link } from 'react-router-dom';
import {
  useGetMovieQuery,
  useGetMovieCreditsQuery,
  useGetSimilarMoviesQuery,
  useGetMovieImagesQuery,
  useGetMovieReviewsQuery,
} from '../../shared/store/api/queries/moviesApi';
import { MovieSlider } from '../../entities/movieSlider';
import { ImageSlider } from '../../entities/imageSlider';
import styles from './Movie.module.scss';

export const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie } = useGetMovieQuery({ movie_id: id || '' });
  const { data: movieCredits } = useGetMovieCreditsQuery({ movie_id: id || '' });
  const { data: moviesSimilar } = useGetSimilarMoviesQuery({ movie_id: id || '' });
  const { data: movieImages } = useGetMovieImagesQuery({ movie_id: id || '' });
  const { data: movieReviews } = useGetMovieReviewsQuery({ movie_id: id || '' });

  return (
    <div className={styles.movie}>
      {movie ? (
        <div>
          <div
            className={styles.head}
            style={{
              backgroundImage: `linear-gradient(0deg,rgb(20, 20, 20) 4%,rgba(20, 20, 20, 0.46) 100%), 
                url(${`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`})`,
            }}>
            <div className={styles.wrapper}>
              <p className={styles.title}>{movie.title}</p>
              <p className={styles.production}>
                {movie.release_date.split('-')[0]} &#8226;{' '}
                {movie.production_countries.map((item, index) =>
                  index !== movie.production_countries.length - 1 ? `${item.name}, ` : `${item.name}`,
                )}{' '}
                &#8226; {movie.runtime} min.
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
                {movie.genres.map((item, index) =>
                  index !== movie.genres.length - 1 ? (
                    <span key={item.id}> {item.name},</span>
                  ) : (
                    <span key={item.id}> {item.name}</span>
                  ),
                )}
              </p>
              <p className={styles.headInfo}>
                Budget: <span>{movie.budget || '-'}</span>
              </p>
              <p className={styles.headInfo}>
                Revenue: <span>{movie.revenue || '-'}</span>
              </p>
            </div>
          </div>

          <div className={styles.description}>{movie?.overview || 'no description'}</div>

          {moviesSimilar ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Similar</h3>

              <MovieSlider data={moviesSimilar.results} />
            </div>
          ) : null}

          {movieImages ? (
            <div className={styles.article}>
              <h3 className={styles.articleTitle}>Images</h3>

              <ImageSlider data={movieImages.backdrops} />
            </div>
          ) : null}
        </div>
      ) : (
        'MOVIE DID NOT FOUND'
      )}
    </div>
  );
};
