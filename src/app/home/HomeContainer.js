import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { homeCreators } from './duck';
import { loginCreators } from '../login';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => ({
    err: state.home.err,
    browser: state.home.browser,
    users_status: state.home.status,
    users: state.home.users,
    login_status: state.login.status
});

const mapDispatchToProps = dispatch => ({
    getUsers: page => dispatch(homeCreators.getUsersRequest(page)),
    deleteUsers: id => dispatch(homeCreators.deleteUsersRequest(id)),
    gotoRoute: pathname => dispatch(push(pathname)),
    logout: () => dispatch(loginCreators.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
