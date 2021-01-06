import { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { requestApiDetails, requestApiEpisodes } from '../actions/actions';

const useRequestApiDetailsAndEpisodes = () => {
  const dispatch = useDispatch();
  const { showId } = useParams();

  const requestApi = useCallback(() => {
    if (showId) {
      dispatch(requestApiDetails(showId));
      dispatch(requestApiEpisodes(showId));
    }
  }, [dispatch, showId]);

  useEffect(() => {
    requestApi();
  }, [requestApi]);

  return requestApi;
};

export default useRequestApiDetailsAndEpisodes;
