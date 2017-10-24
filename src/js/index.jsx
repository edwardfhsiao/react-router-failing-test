// import 'babel-polyfill';

// window.onpageshow = function(event) {
//   if (event.persisted) {
//     window.location.reload();
//   }
// };

// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { render } from 'react-dom';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import { routerReducer } from 'react-router-redux';
// import App from './app/app.jsx';

// import * as reducers from './app/reducers';
// console.log(reducers)
// const reducer = combineReducers({
//   ...reducers,
//   routing: routerReducer
// });

// const store = createStore(reducer);

// render(
//   <Provider store={createStore()}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload();
  }
};

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from './app/reducers';
import App from './app/app.jsx';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
