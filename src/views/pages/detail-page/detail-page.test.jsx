import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import * as actions from '../../../actions/actions';
import { renderWithRouterMatch } from '../../../shared/utils';
import { DetailPage } from './detail-page';

actions.requestApiDetails = jest.fn();
actions.requestApiEpisodes = jest.fn();

const middlewares = [createSagaMiddleware];

describe('DetailPage component', () => {
  const initialState = { details: {}, episodes: [] };
  const mockStore = configureStore(middlewares);
  let store;

  describe('is expected to request data with correct arguments', () => {
    beforeEach(() => {
      store = mockStore(initialState);
      renderWithRouterMatch(
        DetailPage,
        {
          route: '/6771/shows/',
          path: '/:showId/shows/',
        },
        store,
      );
    });

    it('requestApiDetails request', () => {
      expect(actions.requestApiDetails).toHaveBeenCalledWith('6771');
    });

    it('requestApiEpisodes request', () => {
      expect(actions.requestApiEpisodes).toHaveBeenCalledWith('6771');
    });
  });

  describe('is expected to not request data if showId is not existed in the route', () => {
    beforeEach(() => {
      store = mockStore(initialState);
      renderWithRouterMatch(DetailPage, {}, store);
    });

    it('requestApiDetails request', () => {
      expect(actions.requestApiDetails).not.toHaveBeenCalled();
    });

    it('requestApiEpisodes request', () => {
      expect(actions.requestApiEpisodes).not.toHaveBeenCalled();
    });
  });
});
