import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainSidebar } from '../widgets/mainSidebar';
import { RightSidebar } from '../widgets/rightSidebar';
import { SearchHeader } from '../widgets/searchHeader';
import { Content } from './content';
import styles from './App.module.scss';

export const App = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <div className={styles.leftSidebar}>
        <MainSidebar />
      </div>
      <div className={styles.content}>
        <SearchHeader />
        <Content />
      </div>
      <div className={styles.rightSidebar}>
        <RightSidebar />
      </div>
    </div>
  </BrowserRouter>
);
