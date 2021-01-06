import PropTypes from 'prop-types';

import styles from './error-page.module.css';

export const ErrorPage = ({ children }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Error Page</h1>
    <p>Something went wrong...</p>
    {children}
  </div>
);

ErrorPage.propTypes = {
  children: PropTypes.node,
};

ErrorPage.defaultProps = {
  children: null,
};
