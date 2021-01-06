import PropTypes from 'prop-types';

import styles from './details.module.css';

export const Details = ({ details: { name, image, airdate, premiered, summary } }) => (
  <article className={styles.article}>
    <div className={styles.imageWrapper}>
      <img alt={name} className={styles.preview} src={image?.medium} />
      <time className={styles.time}>{airdate || premiered}</time>
    </div>
    <div className={styles.description}>
      <h2>{name}</h2>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  </article>
);

Details.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    airdate: PropTypes.string,
    premiered: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }),
};

Details.defaultProps = {
  details: {
    name: 'Empty name',
    airdate: '',
    premiered: '',
    summary: 'No description',
    image: {
      medium: 'https://via.placeholder.com/250x140',
    },
  },
};
