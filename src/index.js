import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './client/create-store.js';
import App from './client/App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();
const history = createBrowserHistory();
const AppWithRouter = withRouter(App);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <AppWithRouter />
    </Router>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
