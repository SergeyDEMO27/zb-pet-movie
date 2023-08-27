// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Image } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { posterSize } from './config';
import YouTube from 'react-youtube';
import { MovieVideos } from '../../shared/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './VideoSlider.module.scss';

interface VideoSliderProps {
  data: MovieVideos;
}

export const VideoSlider = ({ data }: VideoSliderProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  const opts = {
    height: '135',
    width: '235',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleReady = e => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  };

  return (
    <div className={styles.imageSlider}>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        showsPagination={false}
        navigation={{
          prevEl: '.swiperBtnVidPrev',
          nextEl: '.swiperBtnVidNext',
        }}
        modules={[Navigation]}
        className={styles.swiper}>
        {data?.results?.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <div className={styles.item}>
                <YouTube videoId={item.key} opts={opts} onReady={handleReady} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`${styles.swiperButtonPrev} swiperBtnVidPrev`}>
        <ArrowLeftOutlined />
      </div>
      <div className={`${styles.swiperButtonNext} swiperBtnVidNext`}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
