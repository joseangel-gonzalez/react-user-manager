import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoadingRow = styled.div`
    width: 100%;
    height: 90px;
    padding: 15px 0;
    border-bottom: 1px dotted #f5f5f5;
    position: relative;
    & > div {
        display: inline-block;
    }
`;

const Avatar = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

const UserInfo = styled.div`
    width: calc(100% - 70px);
    height: 70px;
    padding: 0 20px;
    & > div {
        margin: 10px 0;
    }
`;

const Text = styled.div`
    width: ${props => props.width}px;
    height: 1rem;
    border-radius: 0.15rem;
`;

const Button = styled.div`
    width: ${props => props.width}px;
    height: 29px;
    border-radius: 0.25rem;
    position: absolute;
    right: ${props => props.right}px;
    top: 50%;
    transform: translateY(-50%);
`;

const UserLoading = props => (
    <>
        {props.isLoading && (
            <div id="loading">
                <LoadingRow>
                    <Avatar className="loading-animate" />
                    <UserInfo>
                        <Text className="loading-animate" width={50} />
                        <Text className="loading-animate" width={60} />
                    </UserInfo>
                    <Button className="loading-animate" right={0} width={70} />
                    <Button className="loading-animate" right={80} width={55} />
                </LoadingRow>
                <LoadingRow>
                    <Avatar className="loading-animate" />
                    <UserInfo>
                        <Text className="loading-animate" width={50} />
                        <Text className="loading-animate" width={60} />
                    </UserInfo>
                    <Button className="loading-animate" right={0} width={70} />
                    <Button className="loading-animate" right={80} width={55} />
                </LoadingRow>
                <LoadingRow>
                    <Avatar className="loading-animate" />
                    <UserInfo>
                        <Text className="loading-animate" width={50} />
                        <Text className="loading-animate" width={60} />
                    </UserInfo>
                    <Button className="loading-animate" right={15} width={70} />
                    <Button className="loading-animate" right={95} width={55} />
                </LoadingRow>
            </div>
        )}
    </>
);

UserLoading.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default UserLoading;
