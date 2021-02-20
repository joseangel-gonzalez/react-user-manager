import { Types, Creators } from './actions';
import { loginApi, logoutApi } from '../../../lib/api';

export default store => next => action => {
    switch (action.type) {
        case Types.LOGIN_REQUEST:
            next({ ...action, password: undefined });
            loginApi(action.email, action.password)
                .then(response => store.dispatch(Creators.loginSuccess(response.token)))
                .catch(err => store.dispatch(Creators.loginFailure(err)));
            break;

        case Types.LOGOUT_REQUEST: {
            next(action);
            const { email, token } = store.getState().login.user;
            logoutApi(email, token)
                .then(() => store.dispatch(Creators.logoutSuccess()))
                .catch(err => {
                    store.dispatch(Creators.logoutFailure(err));
                });
            break;
        }

        default:
            next(action);
    }
};
