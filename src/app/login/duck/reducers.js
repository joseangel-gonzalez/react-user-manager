import { createReducer } from 'reduxsauce';

import { LoginStatus } from '../../constants';
import { Types } from './actions';

export const INITIAL_STATE = {
    user: {},
    status: LoginStatus.LOGGED_OUT,
    expiration: 300000,
    err: undefined
};

export const loginRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    user: { ...state.user, email: action.email, token: undefined },
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

export const logout = () => INITIAL_STATE;

export const expireToken = (state = INITIAL_STATE, action) => ({
    ...state,
    ...INITIAL_STATE,
    err: action.err
});

export const HANDLERS = {
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.LOGOUT]: logout,
    [Types.EXPIRE_TOKEN]: expireToken
};

export default createReducer(INITIAL_STATE, HANDLERS);
