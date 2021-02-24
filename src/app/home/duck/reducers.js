import { createReducer } from 'reduxsauce';

import { RequestStatus } from '../../constants';
import { Types } from './actions';

export const INITIAL_STATE = {
    users: { next_page: 1 },
    status: undefined,
    err: undefined
};

export const getUsersRequest = (state = INITIAL_STATE) => ({
    ...state,
    status: RequestStatus.REQUESTING,
    err: undefined
});

export const getUsersSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    users: {
        ...state.users,
        ...action.users,
        data: [...(state.users.data || [])].concat(action.users.data),
        next_page: action.users.page + 1
    },
    status: RequestStatus.REQUESTED
});

export const getUsersFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    ...INITIAL_STATE,
    err: action.err
});

export const deleteUsersRequest = (state = INITIAL_STATE) => ({
    ...state,
    status: RequestStatus.REQUESTING,
    err: undefined
});

export const deleteUsersSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    users: {
        ...state.users,
        data: [...state.users.data.slice(0, action.index), ...state.users.data.slice(action.index + 1)]
    },
    status: RequestStatus.REQUESTED
});

export const deleteUsersFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    status: RequestStatus.REQUESTED,
    err: action.err
});

export const clearUsers = (state = INITIAL_STATE) => ({
    ...state,
    ...INITIAL_STATE
});

export const HANDLERS = {
    [Types.GET_USERS_REQUEST]: getUsersRequest,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,
    [Types.DELETE_USERS_REQUEST]: deleteUsersRequest,
    [Types.DELETE_USERS_SUCCESS]: deleteUsersSuccess,
    [Types.DELETE_USERS_FAILURE]: deleteUsersFailure,
    [Types.CLEAR_USERS]: clearUsers
};

export default createReducer(INITIAL_STATE, HANDLERS);
