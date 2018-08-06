import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter,Route,Switch  } from 'react-router-dom';
import 'babel-polyfill';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/sagas'


import reducers from './reducers';
import './static/css/style.css';
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show"
const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware( sagaMiddleware )(createStore);
const store = createStoreWithMiddleware(reducers);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <div>
              <Route exact path="/" component={PostsIndex} ></Route>
              <Switch>
                  <Route path="/posts/new" component={PostsNew} ></Route>
                  <Route path="/posts/:id" component={PostsShow} ></Route>
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));


if (module.hot) {
    module.hot.accept();
}