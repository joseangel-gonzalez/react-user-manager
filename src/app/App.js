import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import { Home } from './home/';
import { Login } from './login/';
import GlobalStyle from './injectGlobal';

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const App = ({ history }) => (
    <ConnectedRouter history={history}>
        <Wrapper>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route render={() => <div>Miss</div>} />
            </Switch>
            <GlobalStyle />
        </Wrapper>
    </ConnectedRouter>
);

App.propTypes = {
    history: PropTypes.object.isRequired
};

export default hot(connect(undefined, undefined)(App));
