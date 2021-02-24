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
                .catch(err =>
                    store.dispatch(Creators.deleteUsersFailure(err.message || err.msg || JSON.stringify(err)))
                );
            break;
        }

        case Types.GET_DETAILS_REQUEST: {
            next(action);
            const { token } = store.getState().login.user;
            fetchApi(`users/${action.id}`, token, {
                method: 'GET',
                headers: {
                    charset: 'UTF-8',
                    Accept: 'application/json'
                },
                params: { delay: 2 }
            })
                .then(({ data: { avatar: _, ...response } }) =>
                    store.dispatch(Creators.getDetailsSuccess(response))
                )
                .catch(err =>
                    store.dispatch(Creators.getDetailsFailure(err.message || err.msg || JSON.stringify(err)))
                );
            break;
        }

        case Types.UPDATE_DETAILS_REQUEST: {
            next(action);
            const { token } = store.getState().login.user;
            const { id, ...data } = action.data;
            fetchApi(`users/${id}`, token, {
                method: 'PUT',
                headers: {
                    charset: 'UTF-8',
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                params: { delay: 2 },
                body: JSON.stringify(data)
            })
                .then(({ updateAt, ...response }) => {
                    store.dispatch(Creators.updateDetailsSuccess({ ...response, id }, updateAt));
                })
                .catch(err =>
                    store.dispatch(
                        Creators.updateDetailsFailure(err.message || err.msg || JSON.stringify(err))
                    )
                );
            break;
        }

        default:
            next(action);
    }
};
