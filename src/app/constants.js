import { Enum } from '../lib/enum';

export const LoginStatus = new Enum({
    REQUESTING: { value: 0, description: 'Requesting' },
    LOGGED_IN: { value: 1, description: 'Logged In' },
    LOGGED_OUT: { value: 2, description: 'Logged Out' }
});

export const RequestStatus = new Enum({
    REQUESTING: { value: 0, description: 'Requesting' },
    REQUESTED: { value: 1, description: 'Requested' },
    RESOLVED: { value: 2, description: 'Resolved' }
});
