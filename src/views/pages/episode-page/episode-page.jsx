import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectEpisodeDetails } from '../../../shared/selectors';
import useRequestApiEpisodeDetails from '../../../hooks/useRequestApiEpisodeDetails';
import { Details } from '../../components/details';

import styles from './episode-page.module.css';

export const EpisodePage = ({ history }) => {
  useRequestApiEpisodeDetails();

  const episodeDetails = useSelector(selectEpisodeDetails);

  const handleGoBack = () => history.goBack();

  return (
    <section>
      <div className={styles.navigation}>
        <button className={styles.backBtn} onClick={handleGoBack} type="button">
          Back
        </button>
      </div>
      <Details details={episodeDetails} />
    </section>
  );
};

EpisodePage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
