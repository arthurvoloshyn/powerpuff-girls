import {
  RECEIVE_API_DETAILS,
  RECEIVE_API_EPISODES,
  RECEIVE_API_EPISODE_DETAILS,
} from '../constants/actionTypes';

const initialState = {
  details: {},
  episodes: [],
  episodeDetails: {},
};

const dataReducer = (state = initialState, { type, data }) => {
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

export default dataReducer;
