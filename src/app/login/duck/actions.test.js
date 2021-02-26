import { Types, Creators } from './actions';

describe('Login actions', () => {
    test('should create an action to request a login', () => {
        const expectedAction = {
            type: Types.LOGIN_REQUEST,
            email: 'email@server.es',
            password: 'contrasena'
        };

        expect(Creators.loginRequest('email@server.es', 'contrasena')).toEqual(expectedAction);
    });

    test('should create an action to succeed a login', () => {
        const expectedAction = {
            type: Types.LOGIN_SUCCESS,
            token: '123456789asdffghjkl@#.'
        };

        expect(Creators.loginSuccess('123456789asdffghjkl@#.')).toEqual(expectedAction);
    });

    test('should create an action to fail a login', () => {
        const expectedAction = {
            type: Types.LOGIN_FAILURE,
            err: 'something went bad'
        };

        expect(Creators.loginFailure('something went bad')).toEqual(expectedAction);
    });

    test('should create an action to do a logout', () => {
        const expectedAction = {
            type: Types.LOGOUT
        };

        expect(Creators.logout()).toEqual(expectedAction);
    });

    test('should create an action to expire a token with an error', () => {
        const expectedAction = {
            type: Types.EXPIRE_TOKEN,
            err: 'something went bad'
        };

        expect(Creators.expireToken('something went bad')).toEqual(expectedAction);
    });

    test('should create an action to expire a token without an error', () => {
        const expectedAction = {
            type: Types.EXPIRE_TOKEN
        };

        expect(Creators.expireToken()).toEqual(expectedAction);
    });
});
