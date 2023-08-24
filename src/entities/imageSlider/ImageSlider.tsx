// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { posterSize } from './config';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './ImageSlider.module.scss';

interface ImageSliderProps {
  data: { file_path: 'string' }[];
}

export const ImageSlider = ({ data }: ImageSliderProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        showsPagination={false}
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}>
        {data.map(item => {
          return (
            <SwiperSlide key={item.file_path}>
              <div className={styles.item}>
                <img className={styles.image} src={`${IMAGE_URL}${posterSize}${item.file_path}`} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
