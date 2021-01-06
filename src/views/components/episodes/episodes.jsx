import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './episodes.module.css';

export const Episodes = ({ episodes }) => {
  if (!episodes.length) return <h3>Sorry, no episodes...</h3>;

  return (
    <>
      <h3 className={styles.title}>All Episodes:</h3>
      <ul className={styles.episodesList}>
        {episodes.map(({ id, name, season, number }) => (
          <li key={id} data-testid="episode">
            <Link to={`${id}/episode/${season}/${number}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      season: PropTypes.number,
      number: PropTypes.number,
    }),
  ),
};

Episodes.defaultProps = {
  episodes: [],
};
