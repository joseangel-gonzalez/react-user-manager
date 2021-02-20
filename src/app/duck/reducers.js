import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import homeReducer from '../home/duck';
import loginReducer from '../login/duck';

export default history =>
    combineReducers({
        home: homeReducer,
        login: loginReducer,
        router: connectRouter(history)
    });
