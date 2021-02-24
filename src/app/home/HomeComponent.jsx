import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { LoginStatus, RequestStatus, Device } from '../constants';
import Header from './Header';
import UsersList from './UserList';
import DetailsForm from './DetailsForm';
import Modal from '../Modal';

export const Container = styled.div`
    min-height: 10rem;
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    position: relative;
    padding: 3.5rem 1rem;

    @media ${Device.mobileS} {
        max-width: 320px;
    }

    @media ${Device.mobileM} {
        max-width: 370px;
    }

    @media ${Device.mobileL} {
        max-width: 400px;
    }

    @media ${Device.tablet} {
        max-width: 700px;
    }

    @media ${Device.laptop} {
        max-width: 680px;
    }

    @media ${Device.laptopL} {
        max-width: 680px;
    }

    @media ${Device.desktop} {
        max-width: 680px;
    }
`;

const HomeComponent = ({
    err,
    users_status,
    users,
    details_status,
    details,
    login_status,
    getUsers,
    deleteUsers,
    getDetails,
    updateDetails,
    clear,
    gotoRoute,
    logout
}) => {
    // State
    const [modal, setModal] = useState({ active: false });

    // Effect
    useEffect(() => {
        if (err) {
            setModal({ active: true, content: err });
        }
    }, [err]);

    useEffect(() => {
        if (users_status === RequestStatus.REQUESTING || details_status === RequestStatus.REQUESTING) {
            return;
        }

        switch (login_status) {
            case LoginStatus.LOGGED_IN:
                if (!users.data) {
                    getUsers(users.next_page);
                }
                break;

            case LoginStatus.LOGGED_OUT:
                gotoRoute('/login');
                break;
        }
    }, [users_status, users, details_status, login_status, getUsers, gotoRoute]);

    const handleClick = (method, data) => {
        switch (method) {
            case 'more':
                getUsers(users.next_page);
                break;

            case 'details':
                getDetails(data);
                break;

            case 'delete':
                deleteUsers(data);
                break;
        }
    };

    return (
        <>
            <Header
                title={'gestionador de usuarios'}
                loading={details_status === RequestStatus.REQUESTING}
                back={details ? clear : undefined}
                logout={logout}
            />
            <Container>
                <div className="container">
                    {!details && (
                        <UsersList
                            loading={users_status === RequestStatus.REQUESTING}
                            data={users.data}
                            next_page={users.next_page}
                            total_pages={users.total_pages}
                            onClick={handleClick}
                        />
                    )}
                    {details && (
                        <DetailsForm
                            loading={details_status === RequestStatus.REQUESTING}
                            data={details}
                            onSubmit={data => updateDetails(data)}
                        />
                    )}
                </div>
            </Container>
            <Modal active={modal.active} hideModal={() => setModal({ active: false })} title="Hubo un error">
                {modal.content && <span>{modal.content}</span>}
            </Modal>
        </>
    );
};

HomeComponent.propTypes = {
    err: PropTypes.string,
    users_status: PropTypes.number,
    users: PropTypes.object,
    details_status: PropTypes.number,
    details: PropTypes.object,
    login_status: PropTypes.number,
    getUsers: PropTypes.func.isRequired,
    deleteUsers: PropTypes.func.isRequired,
    getDetails: PropTypes.func.isRequired,
    updateDetails: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    gotoRoute: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

export default HomeComponent;
