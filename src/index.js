import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App/app";
import store from './store';
import {Provider} from 'react-redux';
import './index.less';
//Provder组件用来向子组件传递store仓库
// window._store=store;
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('#root'));