import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import { DetailPage } from './detail-page';

import { renderWithRouterMatch } from '../../../shared/utils';

import * as actions from '../../../actions/actions';

actions.requestApiDetails = jest.fn();
actions.requestApiEpisodes = jest.fn();

const middlewares = [createSagaMiddleware];

describe('DetailPage component', () => {
  const initialState = { details: {}, episodes: {} };
  const mockStore = configureStore(middlewares);
  let store;

  it('is expected to request data with correct arguments', () => {
    store = mockStore(initialState);
    renderWithRouterMatch(
      DetailPage,
      {
        route: '/6771/shows/',
        path: '/:showId/shows/',
      },
      store,
    );
    expect(actions.requestApiDetails).toHaveBeenCalledWith('6771');
    expect(actions.requestApiEpisodes).toHaveBeenCalledWith('6771');
  });

  it('is expected to not request data if showId is not exist in route', () => {
    store = mockStore(initialState);
    renderWithRouterMatch(DetailPage, {}, store);
    expect(actions.requestApiDetails).not.toHaveBeenCalled();
    expect(actions.requestApiEpisodes).not.toHaveBeenCalled();
  });
});
