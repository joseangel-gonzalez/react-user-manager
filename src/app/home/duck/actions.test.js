import { Types, Creators } from './actions';

describe('Home actions', () => {
    test('should create an action to request the users', () => {
        const expectedAction = {
            type: Types.GET_USERS_REQUEST,
            page: 2
        };

        expect(Creators.getUsersRequest(2)).toEqual(expectedAction);
    });

    test('should create an action to succeed the users request', () => {
        const users = {
            page: 2,
            per_page: 6,
            total: 12,
            total_pages: 2,
            data: [
                {
                    id: 7,
                    email: 'michael.lawson@reqres.in',
                    first_name: 'Michael',
                    last_name: 'Lawson',
                    avatar: 'https://reqres.in/img/faces/7-image.jpg'
                },
                {
                    id: 8,
                    email: 'lindsay.ferguson@reqres.in',
                    first_name: 'Lindsay',
                    last_name: 'Ferguson',
                    avatar: 'https://reqres.in/img/faces/8-image.jpg'
                }
            ]
        };

        const expectedAction = {
            type: Types.GET_USERS_SUCCESS,
            users: users
        };

        expect(Creators.getUsersSuccess(users)).toEqual(expectedAction);
    });

    test('should create an action to fail the users request', () => {
        const expectedAction = {
            type: Types.GET_USERS_FAILURE,
            err: 'something went bad'
        };

        expect(Creators.getUsersFailure('something went bad')).toEqual(expectedAction);
    });

    test('should create an action to request an user removal', () => {
        const expectedAction = {
            type: Types.DELETE_USER_REQUEST,
            id: 8
        };

        expect(Creators.deleteUserRequest(8)).toEqual(expectedAction);
    });

    test('should create an action to succeed an user removal', () => {
        const expectedAction = {
            type: Types.DELETE_USER_SUCCESS,
            index: 1
        };

        expect(Creators.deleteUserSuccess(1)).toEqual(expectedAction);
    });

    test('should create an action to fail an user removal', () => {
        const expectedAction = {
            type: Types.DELETE_USER_FAILURE,
            err: 'something went bad'
        };

        expect(Creators.deleteUserFailure('something went bad')).toEqual(expectedAction);
    });

    test('should create an action to request an user details', () => {
        const expectedAction = {
            type: Types.GET_DETAILS_REQUEST,
            id: 2
        };

        expect(Creators.getDetailsRequest(2)).toEqual(expectedAction);
    });

    test('should create an action to succeed the user details request', () => {
        const data = {
            id: 2,
            email: 'janet.weaver@reqres.in',
            first_name: 'Janet',
            last_name: 'Weaver',
            avatar: 'https://reqres.in/img/faces/2-image.jpg'
        };

        const expectedAction = {
            type: Types.GET_DETAILS_SUCCESS,
            data
        };

        expect(Creators.getDetailsSuccess(data)).toEqual(expectedAction);
    });

    test('should create an action to fail the user details request', () => {
        const expectedAction = {
            type: Types.GET_DETAILS_FAILURE,
            err: 'something went bad'
        };

        expect(Creators.getDetailsFailure('something went bad')).toEqual(expectedAction);
    });

    test('should create an action to update an user details', () => {
        const data = {
            id: 2,
            email: 'janet.weaber@reqres.in',
            last_name: 'Weaber'
        };

        const expectedAction = {
            type: Types.UPDATE_DETAILS_REQUEST,
            data
        };

        expect(Creators.updateDetailsRequest(data)).toEqual(expectedAction);
    });

    test(`should create an action to succeed the user's details update`, () => {
        const data = {
            id: 2,
            email: 'janet.weaber@reqres.in',
            last_name: 'Weaber'
        };

        const expectedAction = {
            type: Types.UPDATE_DETAILS_SUCCESS,
            data,
            updated_at: '2021-02-26T10:10:29.684Z'
        };

        expect(Creators.updateDetailsSuccess(data, '2021-02-26T10:10:29.684Z')).toEqual(expectedAction);
    });

    test(`should create an action to fail the user's details update`, () => {
        const expectedAction = {
            type: Types.UPDATE_DETAILS_FAILURE,
            err: 'something went bad'
        };

        expect(Creators.updateDetailsFailure('something went bad')).toEqual(expectedAction);
    });

    test(`should create an action to clear the users store`, () => {
        const expectedAction = {
            type: Types.CLEAR_USERS
        };

        expect(Creators.clearUsers()).toEqual(expectedAction);
    });
});
