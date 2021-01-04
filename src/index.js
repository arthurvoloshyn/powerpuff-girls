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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:showId/shows/" component={DetailPage} />
            <Route exact path="/:showId/shows/:episodeId/episode/:season/:number/" component={EpisodePage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
