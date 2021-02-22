import { createReducer } from 'reduxsauce';

import { RequestStatus } from '../../constants';
import { Types } from './actions';

export const INITIAL_STATE = {
    users: { next_page: 1 },
    status: undefined,
    err: undefined
};

export const usersRequest = (state = INITIAL_STATE) => ({
    ...state,
    status: RequestStatus.REQUESTING,
    err: undefined
});

export const usersSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    users: {
        ...state.users,
        ...action.users,
        data: [...(state.users.data || [])].concat(action.users.data),
        next_page: action.users.page + 1
    },
    status: RequestStatus.REQUESTED
});

export const usersFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    ...INITIAL_STATE,
    err: action.err
});

export const clearUsers = (state = INITIAL_STATE) => ({
    ...state,
    ...INITIAL_STATE
});

export const HANDLERS = {
    [Types.USERS_REQUEST]: usersRequest,
    [Types.USERS_SUCCESS]: usersSuccess,
    [Types.USERS_FAILURE]: usersFailure,
    [Types.CLEAR_USERS]: clearUsers
};

export default createReducer(INITIAL_STATE, HANDLERS);
