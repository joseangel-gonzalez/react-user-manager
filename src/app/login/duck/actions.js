import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        loginRequest: ['email', 'password'],
        loginSuccess: ['token'],
        loginFailure: ['err'],
        refreshRequest: ['request'],
        refreshSuccess: ['token'],
        refreshFailure: ['err'],
        logoutRequest: null,
        logoutSuccess: null,
        logoutFailure: ['err'],
        clearLogin: []
    },
    { prefix: '@@login/' }
);

export { Creators, Types };
