import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Device } from '../constants';

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

    @media ${Device.mobileS} {
        max-width: 300px;

        .button {
            &.back {
                left: 0px;
            }
            &.logout {
                right: -10px;
            }
        }

        h1 {
            margin-right: 5px;
            line-height: 1.6rem;
            font-size: 0.8rem;
        }
    }

    @media ${Device.mobileM} {
        max-width: 320px;

        .button {
            &.back {
                left: 0px;
            }
            &.logout {
                right: -25px;
            }
        }

        h1 {
            line-height: 1.8rem;
            font-size: 1rem;
        }
    }

    @media ${Device.mobileL} {
        max-width: 350px;

        .button {
            &.back {
                left: -30px;
            }
            &.logout {
                right: -35px;
            }
        }

        h1 {
            line-height: 2rem;
            font-size: 1.2rem;
        }
    }

    @media ${Device.tablet} {
        max-width: 650px;

        .button {
            &.back {
                left: 10px;
            }
            &.logout {
                right: -20px;
            }
        }

        h1 {
            line-height: 3rem;
            font-size: 1.6rem;
        }
    }

    @media ${Device.laptop} {
        max-width: 630px;

        .button {
            &.back {
                left: 10px;
            }
            &.logout {
                right: -20px;
            }
        }

        h1 {
            line-height: 3rem;
            font-size: 1.6rem;
        }
    }

    @media ${Device.laptopL} {
        max-width: 630px;

        .button {
            &.back {
                left: 10px;
            }
            &.logout {
                right: -20px;
            }
        }

        h1 {
            line-height: 3rem;
            font-size: 1.6rem;
        }
    }

    @media ${Device.desktop} {
        max-width: 630px;

        .button {
            &.back {
                left: 10px;
            }
            &.logout {
                right: -20px;
            }
        }

        h1 {
            line-height: 3rem;
            font-size: 1.6rem;
        }
    }
`;

const Header = ({ title, loading, back, logout }) => (
    <HeaderBar>
        <Container>
            <h1>{title}</h1>
            <div className="buttons">
                {back && (
                    <button className="button back" disabled={loading} onClick={back}>
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
    loading: PropTypes.bool,
    back: PropTypes.func,
    logout: PropTypes.func.isRequired
};

export default Header;
