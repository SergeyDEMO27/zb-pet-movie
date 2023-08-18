import { MainMenu } from './ui/mainMenu';
import { menuItems, genresItems, MenuTitles } from './config';
import styles from './MainSidebar.module.scss';

export const MainSidebar = () => (
  <div className={styles.mainSidebar}>
    <h1>DEMO MOVIE</h1>

    <MainMenu title={MenuTitles.MENU} menuItems={menuItems} />

    <MainMenu title={MenuTitles.POPULAR_GENRES} menuItems={genresItems} />
  </div>
);
