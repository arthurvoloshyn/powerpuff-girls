import { render } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

export const renderWithRouterMatch = (
  ui,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
  store = {},
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    </Provider>,
  ),
});
