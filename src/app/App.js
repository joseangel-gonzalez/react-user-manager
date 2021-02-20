import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import { Home } from './home/';

const App = ({ history }) => (
    <ConnectedRouter history={history}>
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                {/*<Route path="/login" component={Login} />*/}
                <Route render={() => <div>Miss</div>} />
            </Switch>
        </>
    </ConnectedRouter>
);

App.propTypes = {
    history: PropTypes.object.isRequired
};

const mapStateToProps = () => ({});

export default hot(connect(mapStateToProps, undefined)(App));
