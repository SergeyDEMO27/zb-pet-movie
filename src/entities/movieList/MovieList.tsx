import { Link } from 'react-router-dom';
import { Pagination, List, Empty } from 'antd';
import { StarFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
import { posterSize, listSizeDiscover, listSizeTrending } from './config';
import { Paginated, Movie, Tv } from '../../shared/types';
import styles from './MovieList.module.scss';

interface MovieListProps {
  data: Paginated<Movie>;
  listType: 'discover' | 'trending';
  handleChangePage: (value: number) => void;
}

export const MovieList = ({ data, listType, handleChangePage }: MovieListProps) => {
  const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  return (
    <div className={styles.movieList}>
      {data?.results?.length ? (
        <Pagination
          className={styles.paginationTop}
          onChange={handleChangePage}
          current={data?.page || 0}
          total={data?.total_pages || 0}
          showSizeChanger={false}
        />
      ) : null}

      <List
        grid={listType === 'discover' ? listSizeDiscover : listSizeTrending}
        dataSource={data?.results || []}
        locale={{
          emptyText: <Empty description="No data was found by your request" />,
        }}
        renderItem={item => (
          <List.Item className={styles.item}>
            <Link to={`/movie/${item.id}`}>
              <div className={styles.picture}>
                <img className={styles.image} src={`${IMAGE_URL}${posterSize}${item?.poster_path}`} alt="" />
              </div>
              <p className={styles.movieTitle}>{item?.title || '-'}</p>
              <p className={styles.rating}>
                <StarFilled /> {item?.vote_average ? Math.round(item.vote_average * 10) / 10 : '?'}
              </p>
              <p className={styles.movieDate}>
                {item?.release_date ? dayjs(item.release_date).format('DD MMMM YYYY') : ''}
              </p>
            </Link>
          </List.Item>
        )}
      />

      {data?.results?.length ? (
        <Pagination
          className={styles.paginationBottom}
          onChange={handleChangePage}
          current={data?.page || 0}
          total={data?.total_pages || 0}
          showSizeChanger={false}
        />
      ) : null}
    </div>
  );
};
