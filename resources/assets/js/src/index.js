import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './containers/App';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    target
);
