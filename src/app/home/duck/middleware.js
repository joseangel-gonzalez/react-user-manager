import { Types, Creators } from './actions';
import { fetchApi } from '../../../lib/api';

export default store => next => action => {
    switch (action.type) {
        case Types.USERS_REQUEST: {
            next(action);
            const { token } = store.getState().login.user;
            fetchApi('users', token, {
                method: 'GET',
                headers: {
                    charset: 'UTF-8',
                    Accept: 'application/json'
                },
                params: { delay: 2, page: action.page }
            })
                .then(({ support: _, ...response }) => store.dispatch(Creators.usersSuccess(response)))
                .catch(err =>
                    store.dispatch(Creators.usersFailure(err.message || err.msg || JSON.stringify(err)))
                );
            break;
        }

        default:
            next(action);
    }
};
