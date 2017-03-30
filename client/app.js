import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import AppContainer from './container/AppContainer.jsx'
import Homepage from './components/Homepage.jsx'
import Model from './components/Model.jsx'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import configureStore from './store/configureStore';
let basePath = process.env.PATH_ROUTER;

if (process.env.NODE_ENV !== 'production') {
    basePath = '/credit/'
}

const store = configureStore();

render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path={ basePath } component={ AppContainer }>
              <IndexRoute component={ Homepage } />

              <Route path='model/' component={ Model } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount-point')
);
