import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';

const mapStateToProps = state => ({
    browser: state.home.browser
});

const mapDispatchToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
