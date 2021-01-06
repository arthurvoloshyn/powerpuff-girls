import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  REQUEST_API_DETAILS,
  REQUEST_API_EPISODES,
  REQUEST_API_EPISODE_DETAILS,
} from '../constants/actionTypes';
import {
  receiveApiDetails,
  receiveApiEpisodes,
  receiveApiEpisodeDetails,
} from '../actions/actions';
import { fetchDetails, fetchShowEpisodes, fetchEpisodeDetails } from '../shared/api';

/* eslint-disable no-console */
function* getShowDetails({ showId }) {
  try {
    const data = yield call(fetchDetails, showId);
    yield put(receiveApiDetails(data));
  } catch (e) {
    console.log(e);
  }
}

function* getShowEpisodes({ showId }) {
  try {
    const data = yield call(fetchShowEpisodes, showId);
    yield put(receiveApiEpisodes(data));
  } catch (e) {
    console.log(e);
  }
}

function* getEpisodeDetails({ showId, season, number }) {
  try {
    const data = yield call(fetchEpisodeDetails, showId, season, number);
    yield put(receiveApiEpisodeDetails(data));
  } catch (e) {
    console.log(e);
  }
}
/* eslint-enable */

function* rootSaga() {
  yield all([
    takeLatest(REQUEST_API_DETAILS, getShowDetails),
    takeLatest(REQUEST_API_EPISODES, getShowEpisodes),
    takeLatest(REQUEST_API_EPISODE_DETAILS, getEpisodeDetails),
  ]);
}

export default rootSaga;
