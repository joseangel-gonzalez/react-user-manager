import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { LoginStatus, RequestStatus } from '../constants';
import Header from './Header';
import UsersList from './UserList';
import Modal from '../Modal';

export const Container = styled.div`
    min-height: 10rem;
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    position: relative;
    padding: 3.5rem 1rem;
`;

const HomeComponent = ({
    /* browser,*/
    err,
    users_status,
    users,
    login_status,
    getUsers,
    deleteUsers,
    gotoRoute,
    logout
}) => {
    // State
    const [active, setActive] = useState(false);

    // Effect
    useEffect(() => {
        if (err) {
            setActive(true);
        }
    }, [err]);

    useEffect(() => {
        switch (login_status) {
            case LoginStatus.LOGGED_IN:
                if (users_status !== RequestStatus.REQUESTING && !users.data) {
                    getUsers(users.next_page);
                }
                break;

            case LoginStatus.LOGGED_OUT:
                gotoRoute('/login');
                break;
        }
    }, [users_status, users, login_status, getUsers, gotoRoute]);

    const handleClick = (method, data) => {
        switch (method) {
            case 'more':
                getUsers(users.next_page);
                break;

            case 'details':
                alert(`Dame los detalles de: ${data}`);
                break;

            case 'delete':
                deleteUsers(data);
                break;
        }
    };

    return (
        <>
            <Header title={'gestionador de usuarios'} logout={logout} />
            <Container>
                <div className="container">
                    <UsersList
                        loading={users_status === RequestStatus.REQUESTING}
                        data={users.data}
                        next_page={users.next_page}
                        total_pages={users.total_pages}
                        onClick={handleClick}
                    />
                </div>
            </Container>
            <Modal active={active} hideModal={() => setActive(false)} title="Hubo un error">
                {err && <span>{err}</span>}
            </Modal>
        </>
    );
};

HomeComponent.propTypes = {
    browser: PropTypes.bool,
    err: PropTypes.string,
    users_status: PropTypes.number,
    users: PropTypes.object,
    login_status: PropTypes.number,
    getUsers: PropTypes.func.isRequired,
    deleteUsers: PropTypes.func.isRequired,
    gotoRoute: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

export default HomeComponent;
