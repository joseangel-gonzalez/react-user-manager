import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';

import { loginMiddleware } from '../login';

const appMiddleware = (/*store*/) => next => action => {
    switch (action.type) {
        default:
            next(action);
    }
};

export default history => [
    ...getDefaultMiddleware(),
    appMiddleware,
    loginMiddleware,
    routerMiddleware(history)
];
