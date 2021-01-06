import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { requestApiDetails, requestApiEpisodes } from '../actions/actions';

const useRequestApiDetailsAndEpisodes = () => {
  const dispatch = useDispatch();
  const { showId } = useParams();

  useEffect(() => {
    if (showId) {
      dispatch(requestApiDetails(showId));
      dispatch(requestApiEpisodes(showId));
    }
  }, [dispatch, showId]);
};

export default useRequestApiDetailsAndEpisodes;
