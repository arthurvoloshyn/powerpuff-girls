import {
  call,
  put,
  takeLatest,
  all,
} from 'redux-saga/effects';

import {
  REQUEST_API_DETAILS,
  REQUEST_API_EPISODES,
  REQUEST_API_EPISODE_DETAILS,
  receiveApiDetails,
  receiveApiEpisodes,
  receiveApiEpisodeDetails,
} from './actions';
import {
  fetchDetails,
  fetchShowEpisodes,
  fetchEpisodeDetails,
} from './api';

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

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_API_DETAILS, getShowDetails),
    takeLatest(REQUEST_API_EPISODES, getShowEpisodes),
    takeLatest(REQUEST_API_EPISODE_DETAILS, getEpisodeDetails),
  ]);
}
