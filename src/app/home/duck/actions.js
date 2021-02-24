import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        getUsersRequest: ['page'],
        getUsersSuccess: ['users'],
        getUsersFailure: ['err'],
        deleteUsersRequest: ['id'],
        deleteUsersSuccess: ['index'],
        deleteUsersFailure: ['err'],
        clearUsers: []
    },
    { prefix: '@@home/' }
);

export { Creators, Types };
