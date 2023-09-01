// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { roundToDecimal } from '../../shared/lib';
import { posterSize } from './config';
import { Movie, Tv, Person } from '../../shared/types';
import dayjs from 'dayjs';
import { StarFilled, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './MovieSlider.module.scss';

interface MovieSliderProps {
  data: Movie[] | Tv[] | Person[];
  sliderType: 'movie' | 'tv' | 'person';
}

export const MovieSlider = ({ data, sliderType }: MovieSliderProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  return (
    <div className={styles.movieSlider}>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          475: {
            slidesPerView: 2,
          },
          650: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 4,
          },
          1420: {
            slidesPerView: 5,
          },
          1600: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={20}
        loop={true}
        showsPagination={false}
        navigation={{
          prevEl: `.swiperBtnPrev${sliderType}`,
          nextEl: `.swiperBtnNext${sliderType}`,
        }}
        modules={[Navigation]}
        className={styles.swiper}>
        {data.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <div className={styles.item}>
                <Link to={`/${sliderType}/${item.id}`}>
                  <div className={styles.picture}>
                    <img
                      className={styles.image}
                      src={`${IMAGE_URL}${posterSize}${item?.poster_path || item?.profile_path}`}
                      alt=""
                    />
                  </div>
                  <p className={styles.movieTitle}>{item?.title || item?.name || '-'}</p>
                  {sliderType !== 'person' ? (
                    <p className={styles.rating}>
                      <StarFilled /> {item?.vote_average ? roundToDecimal(item.vote_average) : '?'}
                    </p>
                  ) : null}
                  {sliderType !== 'person' ? (
                    <p className={styles.movieDate}>
                      {dayjs(item?.release_date || item?.first_air_date || '').format('DD MMMM YYYY')}
                    </p>
                  ) : null}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`${styles.swiperButtonPrev} swiperBtnPrev${sliderType}`}>
        <ArrowLeftOutlined />
      </div>
      <div className={`${styles.swiperButtonNext} swiperBtnNext${sliderType}`}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
