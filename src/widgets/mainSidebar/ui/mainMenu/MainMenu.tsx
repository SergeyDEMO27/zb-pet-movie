import { MenuItem } from '../../types';
import { MenuTitles } from '../../config';
import styles from './MainMenu.module.scss';

interface MainMenuProps {
  title: MenuTitles;
  menuItems: MenuItem[];
}

export const MainMenu = ({ title, menuItems }: MainMenuProps) => (
  <div className={styles.mainMenu}>
    <h3 className={styles.title}>{title}</h3>

    <ul className={styles.list}>
      {menuItems.map(item => (
        <li className={styles.item} key={item.title}>
          <a className={styles.link} href={item.link}>
            <span className={styles.icon}>
              <img src={item.image} alt="" />
            </span>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
