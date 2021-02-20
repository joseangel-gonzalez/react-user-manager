import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { loginCreators } from '../login';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => ({
    browser: state.home.browser,
    login_status: state.login.status
});

const mapDispatchToProps = dispatch => ({
    gotoRoute: pathname => dispatch(push(pathname)),
    refresh: () => dispatch(loginCreators.refreshRequest()),
    logout: () => dispatch(loginCreators.logoutRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
