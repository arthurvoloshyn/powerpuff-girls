import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import ENV from './constants/environment';
import store from './store/store';
import App from './App';
import { HomePage } from './views/pages/home-page';
import { DetailPage } from './views/pages/detail-page';
import { EpisodePage } from './views/pages/episode-page';
import { ErrorPage } from './views/pages/error-page';

import './index.css';

render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App>
          <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={DetailPage} exact path="/:showId/shows/" />
            <Route
              component={EpisodePage}
              exact
              path="/:showId/shows/:episodeId/episode/:season/:number/"
            />
            <Route component={ErrorPage} />
          </Switch>
        </App>
      </Provider>
    </HashRouter>
  </StrictMode>,
  document.getElementById('root'),
);

/* eslint-disable-next-line no-console */
!ENV.PROD && reportWebVitals(console.log);
