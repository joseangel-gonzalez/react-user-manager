import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        usersRequest: ['page'],
        usersSuccess: ['users'],
        usersFailure: ['err'],
        clearUsers: []
    },
    { prefix: '@@home/' }
);

export { Creators, Types };
