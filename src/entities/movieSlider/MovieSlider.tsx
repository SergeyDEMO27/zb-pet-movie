// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { posterSize } from './config';
import { Movie, Tv } from '../../shared/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './MovieSlider.module.scss';

interface MovieSliderProps {
  data: Movie[] | Tv[];
  sliderType: 'movie' | 'tv';
}

export const MovieSlider = ({ data, sliderType }: MovieSliderProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const isMovie = sliderType === 'movie';

  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        showsPagination={false}
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}>
        {data.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <div className={styles.item}>
                <Link to={`/${sliderType}/${item.id}`}>
                  <img
                    className={styles.image}
                    src={`${IMAGE_URL}${posterSize}${item?.poster_path}`}
                    alt={item.original_title}
                  />
                  <p className={styles.movieTitle}>{item?.title || item?.name || '-'}</p>
                  <p className={styles.rating}>{item?.vote_average || ''}</p>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
