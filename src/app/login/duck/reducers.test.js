import loginReducer, { INITIAL_STATE } from './reducers';
import { Types } from './actions';
import { LoginStatus } from '../../constants';

describe('login reducer', () => {
    it('should return the initial state', () => {
        expect(loginReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle LOGIN_REQUEST', () => {
        expect(
            loginReducer(INITIAL_STATE, {
                type: Types.LOGIN_REQUEST,
                email: 'email@server.es',
                password: 'contrasena'
            })
        ).toEqual({ ...INITIAL_STATE, status: LoginStatus.REQUESTING, user: { email: 'email@server.es' } });

        expect(
            loginReducer(
                {
                    ...INITIAL_STATE,
                    status: LoginStatus.LOGGED_IN,
                    user: { email: 'email@server.es', token: '123' }
                },
                { type: Types.LOGIN_REQUEST, email: 'email@server.es', password: 'contrasena' }
            )
        ).toEqual({ ...INITIAL_STATE, status: LoginStatus.REQUESTING, user: { email: 'email@server.es' } });
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            loginReducer(
                { ...INITIAL_STATE, status: LoginStatus.REQUESTING, user: { email: 'email@server.es' } },
                { type: Types.LOGIN_SUCCESS, token: '123' }
            )
        ).toEqual({
            ...INITIAL_STATE,
            status: LoginStatus.LOGGED_IN,
            user: { email: 'email@server.es', token: '123' }
        });
    });

    it('should handle LOGIN_FAILURE', () => {
        expect(
            loginReducer(
                { ...INITIAL_STATE, status: LoginStatus.REQUESTING, user: { email: 'email@server.es' } },
                { type: Types.LOGIN_FAILURE, err: 'something went bad' }
            )
        ).toEqual({ ...INITIAL_STATE, status: LoginStatus.LOGGED_OUT, err: 'something went bad' });
    });

    it('should handle LOGOUT', () => {
        expect(
            loginReducer(
                {
                    ...INITIAL_STATE,
                    status: LoginStatus.LOGGED_IN,
                    user: { email: 'email@server.es', token: '123' }
                },
                { type: Types.LOGOUT }
            )
        ).toEqual(INITIAL_STATE);
    });

    it('should handle EXPIRE_TOKEN', () => {
        expect(
            loginReducer(
                {
                    ...INITIAL_STATE,
                    status: LoginStatus.LOGGED_IN,
                    user: { email: 'email@server.es', token: '123' }
                },
                { type: Types.EXPIRE_TOKEN, err: 'something went bad' }
            )
        ).toEqual({ ...INITIAL_STATE, err: 'something went bad' });

        expect(
            loginReducer(
                {
                    ...INITIAL_STATE,
                    status: LoginStatus.LOGGED_IN,
                    user: { email: 'email@server.es', token: '123' }
                },
                { type: Types.EXPIRE_TOKEN }
            )
        ).toEqual(INITIAL_STATE);
    });
});
