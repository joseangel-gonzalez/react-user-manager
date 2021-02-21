import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { LoginStatus } from '../constants';
import Modal from '../Modal';

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const Header = styled.h2`
    font-weight: normal;
    color: #2a2a29;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Form = styled.form`
    margin: 0 auto;
    width: 100%;
    max-width: 414px;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Input = styled.input`
    max-width: 100%;
    padding: 11px 13px;
    background: #f9f9fa;
    color: #f03d4e;
    margin-bottom: 0.9rem;
    border-radius: 4px;
    outline: 0;
    border: 1px solid rgba(245, 245, 245, 0.7);
    font-size: 14px;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
    :focus,
    :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    }
`;

const Button = styled.button`
    max-width: 100%;
    padding: 11px 13px;
    color: rgb(253, 249, 243);
    font-weight: 600;
    text-transform: uppercase;
    background: #f03d4e;
    border: none;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    margin-top: 0.6rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
    :hover {
        background: rgb(200, 50, 70);
        animation: ${jump} 0.2s ease-out forwards;
    }
`;

const LoginComponent = ({ err, status, login, gotoRoute, clear }) => {
    // State
    const [user, setUser] = useState({ email: '', password: '' });
    const [active, setActive] = useState(false);

    // Effects
    useEffect(() => {
        if (err) {
            setActive(true);
        }
    }, [err]);

    useEffect(() => {
        if (status === LoginStatus.LOGGED_IN) {
            gotoRoute('/home');
        }
    }, [status, gotoRoute]);

    const disabled = status === LoginStatus.REQUESTING || err !== undefined;

    const handleSubmit = e => {
        e.preventDefault();
        login(user.email, user.password);
    };

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.currentTarget;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Header>Introduce tu usuario</Header>
                <label htmlFor="input-1">Usuario:</label>
                <Input
                    id="input-1"
                    type="email"
                    name="email"
                    value={user.email}
                    disabled={disabled}
                    onChange={handleChange}
                />
                <label htmlFor="input-2">Contraseña:</label>
                <Input
                    id="input-2"
                    type="password"
                    name="password"
                    value={user.password}
                    disabled={disabled}
                    onChange={handleChange}
                />
                <Button disabled={disabled}>Entrar</Button>
            </Form>
            <Modal
                active={active}
                hideModal={() => {
                    setUser({ email: '', password: '' });
                    setActive(false);
                    clear();
                }}
                title="Hubo un error">
                {err && <span>{err}</span>}
            </Modal>
        </>
    );
};

LoginComponent.propTypes = {
    err: PropTypes.string,
    status: PropTypes.number,
    login: PropTypes.func.isRequired,
    gotoRoute: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired
};

export default LoginComponent;
