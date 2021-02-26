import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        getUsersRequest: ['page'],
        getUsersSuccess: ['users'],
        getUsersFailure: ['err'],
        deleteUserRequest: ['id'],
        deleteUserSuccess: ['index'],
        deleteUserFailure: ['err'],
        getDetailsRequest: ['id'],
        getDetailsSuccess: ['data'],
        getDetailsFailure: ['err'],
        updateDetailsRequest: ['data'],
        updateDetailsSuccess: ['data', 'updated_at'],
        updateDetailsFailure: ['err'],
        clearUsers: []
    },
    { prefix: '@@home/' }
);

export { Creators, Types };
