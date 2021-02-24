import { Types, Creators } from './actions';
import { fetchApi } from '../../../lib/api';

export default store => next => action => {
    switch (action.type) {
        case Types.GET_USERS_REQUEST: {
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
                .then(({ support: _, ...response }) => store.dispatch(Creators.getUsersSuccess(response)))
                .catch(err =>
                    store.dispatch(Creators.getUsersFailure(err.message || err.msg || JSON.stringify(err)))
                );
            break;
        }

        case Types.DELETE_USERS_REQUEST: {
            next(action);
            const { token } = store.getState().login.user;
            const { data } = store.getState().home.users;
            fetchApi(`users/${action.id}`, token, {
                method: 'DELETE',
                headers: {
                    charset: 'UTF-8',
                    Accept: 'application/json'
                },
                params: { delay: 2 }
            })
                .then(() =>
                    store.dispatch(Creators.deleteUsersSuccess(data.findIndex(u => u.id === action.id)))
                )
                .catch(err => {
                    console.log(err);
                    return store.dispatch(
                        Creators.deleteUsersFailure(err.message || err.msg || JSON.stringify(err))
                    );
                });
            break;
        }

        default:
            next(action);
    }
};
