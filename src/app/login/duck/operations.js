import { Creators } from './actions';

export const loginUser = token => dispatch => {
    dispatch(Creators.loginSuccess(token));
    setTimeout(
        () => dispatch(Creators.expireToken('Su token expiró. Inicie sesión de nuevo')),
        5000 * 300000
    );
};

export default { loginUser };
