import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Thunk from 'redux-thunk';

import Homepage from './components/Homepage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import NewTrip from './components/NewTrip';

import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);


ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Homepage }/>
        <Route path="/login" component={ LoginForm }/>
        <Route path="/signup" component={ SignupForm }/>
        <Route path="/newtrip" component={ NewTrip }/>

      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
