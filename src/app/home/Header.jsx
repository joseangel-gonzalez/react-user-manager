import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const HeaderBar = styled.div`
    width: 100%;
    height: 3rem;
    background: #f2f2f2;
    border-bottom: 1px solid #ddd;
    color: #444;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
`;
export const Container = styled.div`
    width: 100%;
    max-width: 630px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    h1 {
        line-height: 3rem;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        text-transform: uppercase;
    }
    .button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        &.back {
            left: 10px;
        }
        &.logout {
            right: -20px;
        }
    }
`;

const Header = ({ title, back, logout }) => (
    <HeaderBar>
        <Container>
            <h1>{title}</h1>
            <div className="buttons">
                {back && (
                    <button className="button back" onClick={back}>
                        Volver
                    </button>
                )}
                <button className="button logout" onClick={logout}>
                    Cerrar Sesión
                </button>
            </div>
        </Container>
    </HeaderBar>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    back: PropTypes.func,
    logout: PropTypes.func.isRequired
};

export default Header;
