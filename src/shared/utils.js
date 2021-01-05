import { render } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

export const renderWithRouterMatch = (
  ui,
  { path = '/', route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
  store = {},
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>
        <Route component={ui} path={path} />
      </Router>
    </Provider>,
  ),
});

export const getApiInstance = async (url, method = 'GET', data = null) => {
  const initOptions = {
    method,
  };

  const initOptionsWithData = {
    ...initOptions,
    body: JSON.stringify(data),
    headers: { ...initOptions.headers, 'Content-Type': 'application/json' },
  };

  const options = data ? initOptionsWithData : initOptions;

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
};
