import PropTypes from 'prop-types';

import styles from './error.module.css';

export const Error = ({ children }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Error Page</h1>
    <p>Something went wrong...</p>
    {children}
  </div>
);

Error.propTypes = {
  children: PropTypes.node,
};

Error.defaultProps = {
  children: null,
};
