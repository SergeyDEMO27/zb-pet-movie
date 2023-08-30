import { useState } from 'react';
import { useGetSearchResultsQuery } from '../../shared/store/api/queries/searchApi';
import { SearchDropdown } from './ui/searchDropdown';
import styles from './SearchHeader.module.scss';

export const SearchHeader = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { data: searchResult, isLoading } = useGetSearchResultsQuery({
    query: searchValue,
  });

  const handleDropdownVisibility = (isFocus: boolean) => {
    setIsDropdown(isFocus);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenMovie = () => {
    setSearchValue('');
  };

  return (
    <section className={styles.searchHeader}>
      <div
        className={styles.searchWrapper}
        onFocus={() => handleDropdownVisibility(true)}
        onBlur={() => handleDropdownVisibility(false)}
        tabIndex={0}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
        {searchResult ? (
          <div className={!isDropdown ? styles.drop : ''}>
            <SearchDropdown searchResult={searchResult} handleOpenMovie={handleOpenMovie} />
          </div>
        ) : null}
      </div>
    </section>
  );
};
