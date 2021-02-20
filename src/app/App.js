import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import styled, { createGlobalStyle } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import { Home } from './home/';
import { Login } from './login/';

// Global Style
const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background: #FDF9F3;
    }

    body, html, #root {
        height: 100%;
        font-family: -apple-system,
            Ubuntu,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Cantarell,
            "Open Sans",
            "Helvetica Neue",
            sans-serif;
    }
`;

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

const mapStateToProps = () => ({});

export default hot(connect(mapStateToProps, undefined)(App));
