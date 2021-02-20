import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { LoginStatus } from '../constants';
import AppTypes from '../AppTypes';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: ${props => (props.browser ? 'papayawhip' : 'white')};
`;

const HomeComponent = ({ login_status, browser, gotoRoute }) => {
    // Effect
    useEffect(() => {
        switch (login_status) {
            case LoginStatus.LOGGED_IN:
                // refresh token?
                break;

            case LoginStatus.LOGGED_OUT:
                gotoRoute('/login');
                break;
        }
    }, [login_status, gotoRoute]);

    return (
        <Wrapper browser={browser}>
            <Title>{`Es navegador o no? ${browser}`}</Title>
        </Wrapper>
    );
};

HomeComponent.propTypes = {
    login_status: AppTypes.enum,
    browser: PropTypes.bool,
    gotoRoute: PropTypes.func
};

export default HomeComponent;
