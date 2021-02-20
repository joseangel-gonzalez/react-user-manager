import { applyMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

// import { LoginTypes, loginMiddleware } from '../login';

const appMiddleware = (/*store*/) => next => action => {
    switch (action.type) {
        default:
            // eslint-disable-next-line no-console
            console.log('ACTION!!');
            next(action);
    }
};

export default history =>
    applyMiddleware(
        appMiddleware,
        //loginMiddleware,
        routerMiddleware(history),
        thunk
    );
