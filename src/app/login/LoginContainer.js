import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Creators } from './duck/actions';
import LoginComponent from './LoginComponent';

const mapStateToProps = state => ({
    status: state.login.status,
    err: state.login.err
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(Creators.loginRequest(email, password)),
    gotoRoute: pathname => dispatch(push(pathname)),
    clear: () => dispatch(Creators.logoutSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
