export const REQUEST_API_DETAILS = 'REQUEST_API_DETAILS';
export const RECEIVE_API_DETAILS = 'RECEIVE_API_DETAILS';
export const REQUEST_API_EPISODES = 'REQUEST_API_EPISODES';
export const RECEIVE_API_EPISODES = 'RECEIVE_API_EPISODES';
export const REQUEST_API_EPISODE_DETAILS = 'REQUEST_API_EPISODE_DETAILS';
export const RECEIVE_API_EPISODE_DETAILS = 'RECEIVE_API_EPISODE_DETAILS';

export const requestApiDetails = showId => ({ type: REQUEST_API_DETAILS, showId });
export const receiveApiDetails = data => ({ type: RECEIVE_API_DETAILS, data });
export const requestApiEpisodes = showId => ({ type: REQUEST_API_EPISODES, showId });
export const receiveApiEpisodes = data => ({ type: RECEIVE_API_EPISODES, data });
export const requestApiEpisodeDetails = (showId, season, number) => ({
  type: REQUEST_API_EPISODE_DETAILS, showId, season, number,
});
export const receiveApiEpisodeDetails = data => ({ type: RECEIVE_API_EPISODE_DETAILS, data });
