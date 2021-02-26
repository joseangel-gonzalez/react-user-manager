import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { homeCreators } from './duck';
import { loginCreators } from '../login';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => ({
    err: state.home.err,
    users_status: state.home.users_status,
    users: state.home.users,
    details_status: state.home.details_status,
    details: state.home.details,
    login_status: state.login.status
});

const mapDispatchToProps = dispatch => ({
    getUsers: page => dispatch(homeCreators.getUsersRequest(page)),
    deleteUser: id => dispatch(homeCreators.deleteUserRequest(id)),
    getDetails: id => dispatch(homeCreators.getDetailsRequest(id)),
    updateDetails: (id, data) => dispatch(homeCreators.updateDetailsRequest(id, data)),
    clear: () => dispatch(homeCreators.clearUsers()),
    gotoRoute: pathname => dispatch(push(pathname)),
    logout: () => dispatch(loginCreators.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
