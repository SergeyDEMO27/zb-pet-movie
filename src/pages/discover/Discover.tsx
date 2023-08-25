import { useGetAtCinemaTodayMoviesQuery } from '../../shared/store/api/queries/moviesApi';
import { MovieSlider } from '../../entities/movieSlider';
import { imageSliderType } from '../../shared/config';
import { Select } from 'antd';
import styles from './Discover.module.scss';

export const Discover = () => {
  // const { data: atCinemaTodayMovies } = useGetAtCinemaTodayMoviesQuery();

  return (
    <div className={styles.discover}>
      <div className={styles.filter}>
        <h1 className={styles.mainTitle}>Поиск фильмов</h1>
        <div className={styles.sort}>
          <h3 className={styles.title}>Сортировать результаты по</h3>
          <Select
          // onChange={getSortBy}
          // placeholder={'-'}
          // isSearchable={false}
          // styles={selectStyleGenre}
          // options={optionsFil}
          // value={{
          //   value: filterValues.sortBy,
          //   label: sortByCurrentOpt[0].label,
          // }}
          />
        </div>
        <div className="discover-page__genres">
          <h3 className="discover-page__title">Жанры</h3>
          <div className="discover-page__genres-wrapper">
            <div className="discover-page__genres-add">
              <h4 className="discover-page__genres-title">Выбрать</h4>
              {/* {genres.length > 0 && (
                <Select
                  styles={selectStyleGenre}
                  placeholder={'-'}
                  isSearchable={false}
                  onChange={addGenreHandler}
                  isMulti
                  options={genres.filter(({ value }) => !filterValues.disabledGenres.includes(value))}
                  value={genres.filter(({ value }) => filterValues.activeGenres.includes(value))}
                />
              )} */}
            </div>
            <div className="discover-page__genres-remove">
              <h4 className="discover-page__genres-title">Исключить</h4>
              {/* {genres.length > 0 && (
                <Select
                  styles={selectStyleGenre}
                  placeholder={'-'}
                  isSearchable={false}
                  onChange={disableGenreHandler}
                  isMulti
                  options={genres.filter(({ value }) => !filterValues.activeGenres.includes(value))}
                  value={genres.filter(({ value }) => filterValues.disabledGenres.includes(value))}
                />
              )} */}
            </div>
          </div>
        </div>
        <div className="discover-page__year">
          <h3 className="discover-page__title">Годы создания</h3>
          <div>
            <h4 className="discover-page__subtitle">Год создания</h4>
            <input
              className="discover-page__year-actual"
              // onChange={actualRangeHandler}
              // type="number"
              // placeholder="-"
              // value={filterValues.yearsRange.actual}
              // min="1890"
              // max="2022"
              // onWheel={e => e.target.blur()}
            />
          </div>
          <div className="discover-page__year-range">
            <h4 className="discover-page__subtitle">Или интервал годов</h4>
            <div className="discover-page__year-range-wrapper">
              <label className="discover-page__subtitle">
                с
                <Select
                // styles={selectStyleDate}
                // placeholder={'-'}
                // isSearchable={false}
                // options={discoverYears}
                // menuShouldScrollIntoView={false}
                // value={filterValues.yearsRange.start}
                // onChange={startRangeHandler}
                />
              </label>
              <label className="discover-page__subtitle">
                по
                <Select
                // styles={selectStyleDate}
                // placeholder={'-'}
                // isSearchable={false}
                // options={discoverYears}
                // menuShouldScrollIntoView={false}
                // value={filterValues.yearsRange.end}
                // onChange={endRangeHandler}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="discover-page__rating">
          <h3 className="discover-page__title">Пользовательский рейтинг</h3>
          {/* <p className="discover-page__rating-description">От {filterValues.rating} баллов</p> */}
          <input
            className="discover-page__rating-bar"
            // onChange={getRatingHandler}
            type="range"
            min="0"
            max="10"
            step="0.1"
            name=""
            id=""
            // value={filterValues.rating}
          />
        </div>
        <button
          className="discover-page__search-button"
          // onClick={getSearchHandler}
        >
          ПОИСК
        </button>
      </div>
      <div className="discover-page__result">
        {/* {Object.keys(discoverList).length > 0 && (
          <DiscoverResult
            content={discoverList}
            changePageHandler={changePageHandler}
            changePageButtonHandler={changePageButtonHandler}
            type="movie"
          />
        )} */}
      </div>
    </div>
  );
};
