import { screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import * as actions from '../../../actions/actions';
import { renderWithRouterMatch } from '../../../shared/utils';
import { EpisodePage } from './episode-page';

actions.requestApiEpisodeDetails = jest.fn();

const middlewares = [createSagaMiddleware];

describe('EpisodePage component', () => {
  const initialState = { episodeDetails: {} };
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  const route = '/6771/shows/657308/episode/1/1';
  const history = createMemoryHistory({ initialEntries: [route] });

  beforeEach(() => {
    history.goBack = jest.fn();
    renderWithRouterMatch(
      EpisodePage,
      {
        route,
        path: '/:showId/shows/:episodeId/episode/:season/:number',
        history,
      },
      store,
    );
  });

  it('is expected to call request data with correct arguments', () => {
    expect(actions.requestApiEpisodeDetails).toHaveBeenCalledWith('6771', '1', '1');
  });

  it('is expected to go back after clicking the Back button', () => {
    fireEvent.click(screen.getByText(/Back/i));
    expect(history.goBack).toHaveBeenCalled();
  });
});
