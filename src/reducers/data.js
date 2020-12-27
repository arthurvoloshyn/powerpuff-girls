import {
  RECEIVE_API_DETAILS,
  RECEIVE_API_EPISODES,
  RECEIVE_API_EPISODE_DETAILS,
} from '../actions';

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DETAILS:
      return {
        ...state,
        details: data,
      };
    case RECEIVE_API_EPISODES:
      return {
        ...state,
        episodes: data,
      };
    case RECEIVE_API_EPISODE_DETAILS:
      return {
        ...state,
        episodeDetails: data,
      };
    default:
      return state;
  }
};
