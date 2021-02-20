import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const HomeComponent = ({ browser }) => (
    <Wrapper>
        <Title>{`Es navegador o no? ${browser}`}</Title>
    </Wrapper>
);

HomeComponent.propTypes = {
    browser: PropTypes.bool
};

export default HomeComponent;
