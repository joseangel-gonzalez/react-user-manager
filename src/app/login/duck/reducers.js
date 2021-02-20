import { createReducer } from 'reduxsauce';

import { LoginStatus } from '../../constants';
import { Types } from './actions';

export const INITIAL_STATE = {
    user: {},
    status: LoginStatus.LOGGED_OUT,
    err: undefined
};

export const loginRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    user: { ...state.user, email: action.email },
    status: LoginStatus.REQUESTING,
    err: undefined
});

export const loginSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    user: { ...state.user, token: action.token },
    status: LoginStatus.LOGGED_IN
});

export const loginFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    ...INITIAL_STATE,
    err: action.err
});

export const refreshRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    status: LoginStatus.REQUESTING,
    request: action.request,
    err: undefined
});

export const refreshSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    user: { ...state.user, token: action.token },
    status: LoginStatus.LOGGED_IN,
    request: undefined
});

export const refreshFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    ...INITIAL_STATE,
    err: action.err
});

export const logoutRequest = state => ({
    ...state,
    status: LoginStatus.REQUESTING,
    err: undefined
});

export const logoutSuccess = () => INITIAL_STATE;

export const logoutFailure = (state, action) => ({
    ...state,
    status: LoginStatus.LOGGED_IN,
    err: action.err
});

export const HANDLERS = {
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.REFRESH_REQUEST]: refreshRequest,
    [Types.REFRESH_SUCCESS]: refreshSuccess,
    [Types.REFRESH_FAILURE]: refreshFailure,
    [Types.LOGOUT_REQUEST]: logoutRequest,
    [Types.LOGOUT_SUCCESS]: logoutSuccess,
    [Types.LOGOUT_FAILURE]: logoutFailure
};

export default createReducer(INITIAL_STATE, HANDLERS);
