import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainSidebar } from '../widgets/mainSidebar';
import { SearchSidebar } from '../widgets/searchSidebar';
import { Content } from './content';
import styles from './App.module.scss';

export const App = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <div className={styles.leftSidebar}>
        <MainSidebar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.rightSidebar}>
        <SearchSidebar />
      </div>
    </div>
  </BrowserRouter>
);
