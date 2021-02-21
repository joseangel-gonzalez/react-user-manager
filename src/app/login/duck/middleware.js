import { Types, Creators } from './actions';
import operations from './operations';
import { loginApi } from '../../../lib/api';

export default store => next => action => {
    switch (action.type) {
        case Types.LOGIN_REQUEST:
            next({ ...action, password: undefined });
            loginApi(action.email, action.password)
                .then(response => store.dispatch(operations.loginUser(response.token)))
                .catch(err =>
                    store.dispatch(Creators.loginFailure(err.message || err.msg || JSON.stringify(err)))
                );
            break;

        default:
            next(action);
    }
};
