import React from 'react';
// Disable this rule because making webpack aliases throught
// customize-cra make some problems with eslint
// eslint-disable-next-line import/no-unresolved
import { render } from 'react-dom' /* @hot-loader/react-dom*/;
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import createRootStore from './app/duck';
import App from './app/App';

const history = createBrowserHistory();
document.addEventListener('DOMContentLoaded', () => {
    const store = createRootStore(history);
    const rootElement = document.getElementById('root');
    render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        rootElement
    );
});
