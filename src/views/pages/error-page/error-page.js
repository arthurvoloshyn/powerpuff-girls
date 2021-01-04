import styles from './error-page.module.css';

export const ErrorPage = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Error Page</h1>
    <p>Something went wrong...</p>
  </div>
);
