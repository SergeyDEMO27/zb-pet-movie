// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Image } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { posterSize } from './config';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './ImageSlider.module.scss';

interface ImageSliderProps {
  data: { file_path: string }[];
  imageType: 'movie' | 'person';
}

export const ImageSlider = ({ data, imageType }: ImageSliderProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const isMovieType = imageType === 'movie';

  return (
    <div className={styles.imageSlider}>
      <Swiper
        slidesPerView={isMovieType ? 4 : 6}
        spaceBetween={20}
        loop={true}
        showsPagination={false}
        navigation={{
          prevEl: '.swiperBtnImgPrev',
          nextEl: '.swiperBtnImgNext',
        }}
        modules={[Navigation]}
        className={styles.swiper}>
        {data.map(item => {
          return (
            <SwiperSlide key={item.file_path}>
              <div className={styles.item}>
                <Image
                  className={isMovieType ? styles.image : styles.personImage}
                  src={`${IMAGE_URL}${posterSize}${item.file_path}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`${styles.swiperButtonPrev} swiperBtnImgPrev`}>
        <ArrowLeftOutlined />
      </div>
      <div className={`${styles.swiperButtonNext} swiperBtnImgNext`}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
