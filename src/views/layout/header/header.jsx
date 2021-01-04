import { NavLink } from 'react-router-dom';

import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/6771/shows/">Powerpuff Girls</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
