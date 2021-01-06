import { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { requestApiEpisodeDetails } from '../actions/actions';

const useRequestApiEpisodeDetails = () => {
  const dispatch = useDispatch();
  const { showId, season, number } = useParams();

  const requestApi = useCallback(
    () => showId && number && season && dispatch(requestApiEpisodeDetails(showId, season, number)),
    [dispatch, number, season, showId],
  );

  useEffect(() => {
    requestApi();
  }, [requestApi]);

  return requestApi;
};

export default useRequestApiEpisodeDetails;
