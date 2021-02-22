import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        loginRequest: ['email', 'password'],
        loginSuccess: ['token'],
        loginFailure: ['err'],
        logout: [],
        expireToken: ['err']
    },
    { prefix: '@@login/' }
);

export { Creators, Types };
