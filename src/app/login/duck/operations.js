import { Creators } from './actions';

export const loginUser = token => (dispatch, getState) => {
    dispatch(Creators.loginSuccess(token));
    setTimeout(
        () => dispatch(Creators.expireToken('Su token expiró. Inicie sesión de nuevo')),
        getState().login.expiration
    );
};

export default { loginUser };
