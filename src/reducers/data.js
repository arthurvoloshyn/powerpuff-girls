import {
  RECEIVE_API_DETAILS,
  RECEIVE_API_EPISODES,
  RECEIVE_API_EPISODE_DETAILS,
  RECEIVE_API_FAILURE,
} from '../constants/actionTypes';

const initState = {
  details: {},
  episodes: [],
  episodeDetails: {},
  errorMsg: null,
};

export default (state = initState, { type, data, errorMsg }) => {
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
    case RECEIVE_API_FAILURE:
      return {
        ...state,
        errorMsg,
      };
    default:
      return state;
  }
};
