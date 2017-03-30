import { createStore, applyMiddleware, compose } from 'redux';

import rootReducter from '../reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];

export default function configureStore(initialState) {

    let composeEnhancers = compose;

    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
        const createLogger = require('redux-logger');
        const logger = createLogger();
        middlewares.push(logger);
    }

    const middleware = applyMiddleware(...middlewares);

    const store = createStore(
      rootReducter,
      initialState,
      composeEnhancers(middleware)
    );

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers');
        store.replaceReducer(nextRootReducer);
      });
    }

    return store;
}
