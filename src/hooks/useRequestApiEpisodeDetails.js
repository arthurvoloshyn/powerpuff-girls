import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { requestApiEpisodeDetails } from '../actions/actions';

const useRequestApiEpisodeDetails = () => {
  const dispatch = useDispatch();
  const { showId, season, number } = useParams();

  useEffect(() => {
    showId && number && season && dispatch(requestApiEpisodeDetails(showId, season, number));
  }, [dispatch, number, season, showId]);
};

export default useRequestApiEpisodeDetails;
