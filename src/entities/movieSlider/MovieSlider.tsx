// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { posterSize } from './config';
import { Movie } from '../../shared/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './MovieSlider.module.scss';

interface MovieSliderProps {
  data: Movie[];
}

export const MovieSlider = ({ data }: MovieSliderProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

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
                <img
                  className={styles.image}
                  src={`${IMAGE_URL}${posterSize}${item?.poster_path}`}
                  alt={item.original_title}
                />
                <p className={styles.movieTitle}>{item?.title || '-'}</p>
                <p className={styles.rating}>{item?.vote_average || '-'}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
