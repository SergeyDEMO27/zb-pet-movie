import { MainSidebar } from '../../../widgets/mainSidebar';
import { SearchSidebar } from '../../../widgets/searchSidebar';
import styles from './Main.module.scss';

export const Main = () => (
  <div className={styles.main}>
    <div className={styles.leftSidebar}>
      <MainSidebar />
    </div>
    <div className={styles.content}>
      <div>TITLE PAGE</div>
    </div>
    <div className={styles.rightSidebar}>
      <SearchSidebar />
    </div>
  </div>
);
