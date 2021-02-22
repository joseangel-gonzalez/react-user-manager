import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserLoading from './UserLoading';

export const Row = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px 0;
    border-bottom: 2px dotted #f2f2f2;
    position: relative;
    & > div {
        display: inline-block;
    }
    button,
    a {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        &.delete {
            right: 5px;
        }
        &.edit {
            right: 80px;
        }
    }
`;

export const Avatar = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #f3f3f3;
    float: left;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`;

export const UserInfo = styled.div`
    width: calc(100% - 70px);
    height: 70px;
    padding: 0 20px;
    float: left;
    & > div {
        margin: 2px 0;
    }
`;

export const Text = styled.div`
    font-size: 1rem;
    color: ${props => (props.color === 'firstname' ? '#9a9a9a' : '#7b7b7b')};
    font-weight: ${props => (props.color === 'firstname' ? '100' : '700')};
`;

export const UsersList = ({ loading, data, next_page, total_pages, onClick }) => {
    const renderRow = (items = []) =>
        items.map(item => (
            <Row key={item.id} id={item.id}>
                <Avatar>
                    <img src={item.avatar} alt={item.first_name} />
                </Avatar>
                <UserInfo>
                    <Text color={'firstname'} className="firstname">
                        {item.first_name}
                    </Text>
                    <Text color={'lastname'} className="lastname">
                        {item.last_name}
                    </Text>
                </UserInfo>
                <button className="button delete" onClick={() => onClick('delete', item.id)}>
                    Borrar
                </button>
                <button className="button details" onClick={() => onClick('details', item.id)}>
                    Detalles
                </button>
            </Row>
        ));

    return (
        <>
            {renderRow(data)}
            <UserLoading isLoading={loading} />
            <div style={{ textAlign: 'center' }}>
                {total_pages >= next_page && !loading && (
                    <button className="button load_more" onClick={() => onClick('more')}>
                        Cargar más ...
                    </button>
                )}
            </div>
        </>
    );
};

UsersList.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.array,
    next_page: PropTypes.number,
    total_pages: PropTypes.number,
    onClick: PropTypes.func.isRequired
};

export default UsersList;
