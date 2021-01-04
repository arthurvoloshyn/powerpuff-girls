import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { App } from './App';
import { HomePage } from './views/pages/home-page';
import { DetailPage } from './views/pages/detail-page';
import { EpisodePage } from './views/pages/episode-page';
import { ErrorPage } from './views/pages/error-page';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
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
            <Route component={ErrorPage} path="*" />
          </Switch>
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
