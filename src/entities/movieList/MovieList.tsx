import { Link } from 'react-router-dom';
import { Pagination, List, Empty } from 'antd';
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
