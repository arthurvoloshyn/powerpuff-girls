import PropTypes from 'prop-types';

import styles from './details.module.css';

export const Details = ({ details }) => (
  <article className={styles.article}>
    <div className={styles.imageWrapper}>
      <img alt={details.name} className={styles.preview} src={details?.image?.medium} />
      <time className={styles.time}>{details.airdate || details.premiered}</time>
    </div>
    <div className={styles.description}>
      <h2>{details.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: details.summary }} />
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
