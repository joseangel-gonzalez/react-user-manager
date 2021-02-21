import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        loginRequest: ['email', 'password'],
        loginSuccess: ['token'],
        loginFailure: ['err'],
        expireToken: ['err']
    },
    { prefix: '@@login/' }
);

export { Creators, Types };
