import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './components/App/App';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// NHÚNG JQUERY trước BOOTSTRAP
// import 'jquery/dist/jquery.min.js';  // loi
import 'jquery';     // ok

// NHÚNG BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
// registerServiceWorker();