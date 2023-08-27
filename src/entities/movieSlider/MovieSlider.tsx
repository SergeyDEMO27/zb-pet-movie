// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { posterSize } from './config';
import { Movie, Tv } from '../../shared/types';
import dayjs from 'dayjs';
import { StarFilled, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
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

  return (
    <div className={styles.movieSlider}>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        showsPagination={false}
        navigation={{
          prevEl: '.swiperBtnPrev',
          nextEl: '.swiperBtnNext',
        }}
        modules={[Navigation]}
        className={styles.swiper}>
        {data.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <div className={styles.item}>
                <Link to={`/${sliderType}/${item.id}`}>
                  <div className={styles.picture}>
                    <img className={styles.image} src={`${IMAGE_URL}${posterSize}${item?.poster_path}`} alt="" />
                  </div>
                  <p className={styles.movieTitle}>{item?.title || item?.name || '-'}</p>
                  <p className={styles.rating}>
                    <StarFilled /> {item?.vote_average ? Math.round(item.vote_average * 10) / 10 : '?'}
                  </p>
                  <p className={styles.movieDate}>
                    {dayjs(item?.release_date || item?.first_air_date || '').format('DD MMMM YYYY')}
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`${styles.swiperButtonPrev} swiperBtnPrev`}>
        <ArrowLeftOutlined />
      </div>
      <div className={`${styles.swiperButtonNext} swiperBtnNext`}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
