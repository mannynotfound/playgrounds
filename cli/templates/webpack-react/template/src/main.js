import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import {Provider} from 'react-redux';
import App from './components/app';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#container')
);
