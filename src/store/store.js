import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import ENV from '../constants/environment';
import reducer from '../reducers';
import rootSaga from '../sagas/sagas';

const composeEnhancers =
  (!ENV.PROD && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({})) ||
  compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(rootSaga);
