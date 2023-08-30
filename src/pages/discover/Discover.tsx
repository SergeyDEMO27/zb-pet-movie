import { useEffect, useState } from 'react';
import { useGetGenresMoviesQuery } from '../../shared/store/api/queries/genreApi';
import { useGetDiscoverMoviesQuery } from '../../shared/store/api/queries/discoverApi';
import { Form, Slider, Button, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { MovieList } from '../../entities/movieList';
import { sortByOptions } from './config';
import { SelectOptions, DiscoverReqData } from '../../shared/types';
import styles from './Discover.module.scss';

export const Discover = () => {
  const [form] = Form.useForm();
  const [filterSettings, setFilterSettings] = useState<DiscoverReqData>({});
  const [selectedGenres, setSelectedGenres] = useState<SelectOptions>([]);
  const [disabledGenres, setDisabledGenres] = useState<SelectOptions>([]);
  const { data: genresMovie, isError: isGenreError, isLoading: isGenreLoading } = useGetGenresMoviesQuery();
  const {
    data: discoverMovies,
    isError: isDiscoverError,
    isLoading: isDiscoverLoading,
  } = useGetDiscoverMoviesQuery(filterSettings);

  useEffect(() => {
    setSelectedGenres(genresMovie || []);
  }, [genresMovie]);

  const formSubmitHandler = (values: DiscoverReqData) => {
    const reqData = {
      ...values,
      dateStart: values.yearRange?.[0] ? `${dayjs(values.yearRange[0]).format('YYYY')}-01-01` : '',
      dateEnd: values.yearRange?.[1] ? `${dayjs(values.yearRange[1]).format('YYYY')}-12-31` : '',
    };
    setFilterSettings(reqData);
  };

  const handleSelectGenre = (values: number[]) => {
    const filteredGenres = (genresMovie || []).filter(item => !values.includes(item.value));
    setDisabledGenres(filteredGenres);
  };

  const handleChangePage = (value: number) => {
    setFilterSettings({ ...filterSettings, page: value });
  };

  const handleResetDiscover = () => {
    setFilterSettings({});
    form.resetFields();
  };

  const handleDisableGenre = (values: number[]) => {
    const filteredGenres = (genresMovie || []).filter(item => !values.includes(item.value));
    setSelectedGenres(filteredGenres);
  };

  return (
    <div className={styles.discover}>
      <h2 className={styles.mainTitle}>Discover movies</h2>
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{ vote_average: 0 }}
            onFinish={formSubmitHandler}
            autoComplete="off">
            <Form.Item label="Sort by" name="sort_by">
              <Select options={sortByOptions} />
            </Form.Item>

            <Form.Item label="Genres" name="with_genres">
              <Select
                onChange={handleSelectGenre}
                options={selectedGenres.length ? selectedGenres : genresMovie || []}
                mode="multiple"
                allowClear
              />
            </Form.Item>

            <Form.Item label="Disabled genres" name="without_genres">
              <Select
                onChange={handleDisableGenre}
                options={disabledGenres.length ? disabledGenres : genresMovie || []}
                mode="multiple"
                allowClear
              />
            </Form.Item>

            <Form.Item label="Year range" name="yearRange">
              <DatePicker.RangePicker picker="year" />
            </Form.Item>

            <Form.Item label="Rating" name="vote_average">
              <Slider max={10} min={0} step={0.1} />
            </Form.Item>

            <div className={styles.buttons}>
              <Form.Item>
                <Button htmlType="submit" className={styles.button} type="primary" loading={isDiscoverLoading}>
                  Search
                </Button>
              </Form.Item>
              <Button onClick={handleResetDiscover} className={styles.button}>
                Reset
              </Button>
            </div>
          </Form>
        </div>
        <div className={styles.result}>
          {discoverMovies ? (
            <MovieList data={discoverMovies} listType="discover" handleChangePage={handleChangePage} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
