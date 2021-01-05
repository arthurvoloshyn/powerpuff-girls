import API_PATHS from '../constants/apiPaths';
import { getApiInstance } from './utils';

const { BASE_PATH, EPISODES_PATH, EPISODES_BY_NUMBER_PATH, SEASON_PARAM, NUMBER_PARAM } = API_PATHS;

/* eslint-disable max-len */
export const fetchDetails = showId => getApiInstance(`${BASE_PATH}/${showId}`);
export const fetchShowEpisodes = showId => getApiInstance(`${BASE_PATH}/${showId}${EPISODES_PATH}`);
export const fetchEpisodeDetails = (showId, season, number) =>
  getApiInstance(
    `${BASE_PATH}/${showId}${EPISODES_BY_NUMBER_PATH}?${SEASON_PARAM}${season}&${NUMBER_PARAM}${number}`,
  );
/* eslint-enable */
