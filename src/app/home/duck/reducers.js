import { createReducer } from 'reduxsauce';

import { RequestStatus } from '../../constants';
import { Types } from './actions';

export const INITIAL_STATE = {
    users_status: undefined,
    users: { next_page: 1 },
    details_status: undefined,
    details: undefined,
    err: undefined
};

export const getUsersRequest = (state = INITIAL_STATE) => ({
    ...state,
    users_status: RequestStatus.REQUESTING,
    err: undefined
});

export const getUsersSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    users_status: RequestStatus.REQUESTED,
    users: {
        ...state.users,
        ...action.users,
        data: [...(state.users.data || [])].concat(action.users.data || []),
        next_page: action.users.page + 1
    }
});

export const getUsersFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    users_status: RequestStatus.REQUESTED,
    err: action.err
});

export const deleteUserRequest = (state = INITIAL_STATE) => ({
    ...state,
    users_status: RequestStatus.REQUESTING,
    err: undefined
});

export const deleteUserSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    users_status: RequestStatus.REQUESTED,
    users: {
        ...state.users,
        data: [...state.users.data.slice(0, action.index), ...state.users.data.slice(action.index + 1)]
    }
});

export const deleteUserFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    users_status: RequestStatus.REQUESTED,
    err: action.err
});

export const getDetailsRequest = (state = INITIAL_STATE) => ({
    ...state,
    details: {},
    details_status: RequestStatus.REQUESTING,
    err: undefined
});

export const getDetailsSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    details_status: RequestStatus.REQUESTED,
    details: action.data
});

export const getDetailsFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    details_status: RequestStatus.REQUESTED,
    err: action.err
});

export const updateDetailsRequest = (state = INITIAL_STATE) => ({
    ...state,
    details_status: RequestStatus.REQUESTING,
    old_details: state.details,
    details: {},
    err: undefined
});

export const updateDetailsSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    details_status: RequestStatus.REQUESTED,
    old_details: undefined,
    details: action.data,
    updated_at: action.updated_at
});

export const updateDetailsFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    details_status: RequestStatus.REQUESTED,
    old_details: undefined,
    details: state.old_details,
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
    [Types.DELETE_USER_REQUEST]: deleteUserRequest,
    [Types.DELETE_USER_SUCCESS]: deleteUserSuccess,
    [Types.DELETE_USER_FAILURE]: deleteUserFailure,
    [Types.GET_DETAILS_REQUEST]: getDetailsRequest,
    [Types.GET_DETAILS_SUCCESS]: getDetailsSuccess,
    [Types.GET_DETAILS_FAILURE]: getDetailsFailure,
    [Types.UPDATE_DETAILS_REQUEST]: updateDetailsRequest,
    [Types.UPDATE_DETAILS_SUCCESS]: updateDetailsSuccess,
    [Types.UPDATE_DETAILS_FAILURE]: updateDetailsFailure,
    [Types.CLEAR_USERS]: clearUsers
};

export default createReducer(INITIAL_STATE, HANDLERS);
