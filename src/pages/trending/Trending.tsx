import { Link } from 'react-router-dom';
import { useGetTrendingMovieQuery } from '../../shared/store/api/queries/trendingApi';
import { Pagination, List } from 'antd';
import { posterSize } from './config';
import styles from './Trending.module.scss';
import { useState } from 'react';

export const Trending = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: trending } = useGetTrendingMovieQuery({ pageNumber: currentPage });
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  console.log(trending);

  const handleChangePage = (value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.trending}>
      <h2 className={styles.title}>Trending</h2>

      <Pagination
        onChange={handleChangePage}
        current={trending?.page || 0}
        total={trending?.total_pages || 0}
        showSizeChanger={false}
      />

      <List
        grid={{
          gutter: 20,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={trending?.results || []}
        renderItem={item => (
          <List.Item>
            <Link to={`/movie/${item.id}`}>
              <img src={`${IMAGE_URL}${posterSize}${item?.poster_path}`} alt="" />
              <div className={styles.wrapper}>
                <p>{item?.title}</p>
                <p>
                  {item?.vote_average} {item?.release_date}
                </p>
              </div>
            </Link>
          </List.Item>
        )}
      />

      <Pagination
        onChange={handleChangePage}
        current={trending?.page || 0}
        total={trending?.total_pages || 0}
        showSizeChanger={false}
      />
    </div>
  );
};
