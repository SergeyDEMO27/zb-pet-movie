import { useState } from 'react';
import { useGetSearchResultsQuery } from '../../shared/store/api/queries/searchApi';
import { SearchDropdown } from './ui/searchDropdown';
import styles from './SearchHeader.module.scss';

export const SearchHeader = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data: searchResult } = useGetSearchResultsQuery({
    query: searchValue,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className={styles.searchHeader}>
      <div className={styles.searchWrapper}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
        {searchResult ? <SearchDropdown searchResult={searchResult} /> : null}
      </div>
    </section>
  );
};
