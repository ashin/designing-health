import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';

//components
import App from './components/App';
import { HomeContainer } from './components/Home';

console.log(HomeContainer);

const store = createStore(reducer);

const routes = <Route component={App}>
  	<Route path="/" component={HomeContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <HomeContainer />
  </Provider>,
  document.getElementById('app')
);