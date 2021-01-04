import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Details } from '../../components/details';

import { requestApiEpisodeDetails } from '../../../actions/actions';
import { selectEpisodeDetails } from '../../../shared/selectors';

import styles from './episode-page.module.css';

export const EpisodePage = ({ history }) => {
  const dispatch = useDispatch();
  const { showId, season, number } = useParams();

  const episodeDetails = useSelector(selectEpisodeDetails);

  useEffect(() => {
    if (showId && number && season) {
      dispatch(requestApiEpisodeDetails(showId, season, number));
    }
  }, [showId, number, season]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section>
      <div className={styles.navigation}>
        <button type="button" onClick={handleGoBack} className={styles.backBtn}>Back</button>
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
