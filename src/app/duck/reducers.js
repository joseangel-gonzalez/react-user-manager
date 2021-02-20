import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import homeReducer from '../home/duck';

export default history =>
    combineReducers({
        home: homeReducer,
        router: connectRouter(history)
    });
