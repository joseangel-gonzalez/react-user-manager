import homeReducer, { INITIAL_STATE } from './reducers';
import { Types } from './actions';
import { RequestStatus } from '../../constants';

const page1_data = [
    {
        id: 8,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'Lindsay',
        last_name: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg'
    },
    {
        id: 9,
        email: 'tobias.funke@reqres.in',
        first_name: 'Tobias',
        last_name: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg'
    },
    {
        id: 10,
        email: 'byron.fields@reqres.in',
        first_name: 'Byron',
        last_name: 'Fields',
        avatar: 'https://reqres.in/img/faces/10-image.jpg'
    },
    {
        id: 11,
        email: 'george.edwards@reqres.in',
        first_name: 'George',
        last_name: 'Edwards',
        avatar: 'https://reqres.in/img/faces/11-image.jpg'
    }
];

const page2_data = [
    {
        id: 12,
        email: 'rachel.howell@reqres.in',
        first_name: 'Rachel',
        last_name: 'Howell',
        avatar: 'https://reqres.in/img/faces/12-image.jpg'
    }
];

const baseUsers = {
    page: 1,
    per_page: 4,
    total: 5,
    total_pages: 2,
    data: []
};

const completeUsers = {
    ...baseUsers,
    next_page: 3,
    page: 2,
    data: page1_data.concat(page2_data)
};

describe('home reducer', () => {
    it('should return the initial state', () => {
        expect(homeReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle GET_USERS_REQUEST', () => {
        expect(homeReducer(INITIAL_STATE, { type: Types.GET_USERS_REQUEST })).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTING
        });

        expect(
            homeReducer({ ...INITIAL_STATE, err: 'something went bad' }, { type: Types.GET_USERS_REQUEST })
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTING
        });

        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTED,
                    users: { ...INITIAL_STATE.users, ...baseUsers, data: page1_data }
                },
                { type: Types.GET_USERS_REQUEST, page: 2 }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTING,
            users: { ...INITIAL_STATE.users, ...baseUsers, data: page1_data }
        });
    });

    it('should handle GET_USERS_SUCCESS', () => {
        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTING
                },
                { type: Types.GET_USERS_SUCCESS, users: { ...baseUsers, data: page1_data } }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTED,
            users: {
                ...baseUsers,
                next_page: 2,
                data: page1_data
            }
        });

        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTING,
                    users: { ...baseUsers, next_page: 2, data: page1_data }
                },
                { type: Types.GET_USERS_SUCCESS, users: { ...baseUsers, page: 2, data: page2_data } }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTED,
            users: completeUsers
        });
    });

    it('should handle GET_USERS_FAILURE', () => {
        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTING
                },
                { type: Types.GET_USERS_FAILURE, err: 'something went bad' }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTED,
            err: 'something went bad'
        });

        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTING,
                    users: { ...baseUsers, next_page: 2, data: page1_data }
                },
                { type: Types.GET_USERS_FAILURE, err: 'something went bad' }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTED,
            users: {
                ...baseUsers,
                next_page: 2,
                data: page1_data
            },
            err: 'something went bad'
        });
    });

    it('should handle DELETE_USER_REQUEST', () => {
        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTED,
                    users: {
                        ...baseUsers,
                        next_page: 2,
                        data: page1_data
                    }
                },
                { type: Types.DELETE_USER_REQUEST, id: 9 }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTING,
            users: {
                ...baseUsers,
                next_page: 2,
                data: page1_data
            }
        });

        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTED,
                    users: completeUsers,
                    err: 'something went bad'
                },
                { type: Types.DELETE_USER_REQUEST, id: 9 }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTING,
            users: completeUsers
        });
    });

    it('should handle DELETE_USER_SUCCESS', () => {
        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTING,
                    users: {
                        ...baseUsers,
                        next_page: 2,
                        data: page1_data
                    }
                },
                { type: Types.DELETE_USER_SUCCESS, index: 1 }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTED,
            users: {
                ...baseUsers,
                next_page: 2,
                data: [...page1_data.slice(0, 1), ...page1_data.slice(2)]
            }
        });
    });

    it('should handle DELETE_USER_FAILURE', () => {
        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTING,
                    users: {
                        ...baseUsers,
                        next_page: 2,
                        data: page1_data
                    }
                },
                { type: Types.DELETE_USER_FAILURE, err: 'something went bad' }
            )
        ).toEqual({
            ...INITIAL_STATE,
            users_status: RequestStatus.REQUESTED,
            users: {
                ...baseUsers,
                next_page: 2,
                data: page1_data
            },
            err: 'something went bad'
        });
    });

    it('should handle CLEAR_USERS', () => {
        expect(
            homeReducer(
                {
                    ...INITIAL_STATE,
                    users_status: RequestStatus.REQUESTING,
                    users: {
                        ...baseUsers,
                        next_page: 2,
                        data: page1_data
                    }
                },
                { type: Types.CLEAR_USERS }
            )
        ).toEqual(INITIAL_STATE);
    });
});
