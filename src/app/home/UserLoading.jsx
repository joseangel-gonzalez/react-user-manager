import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Device } from '../constants';

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

    @media ${Device.mobileS} {
        width: 50px;
        height: 50px;
    }

    @media ${Device.mobileM} {
        width: 60px;
        height: 60px;
    }

    @media ${Device.mobileL} {
        width: 60px;
        height: 60px;
    }

    @media ${Device.tablet} {
        width: 70px;
        height: 70px;
    }

    @media ${Device.laptop} {
        width: 70px;
        height: 70px;
    }

    @media ${Device.laptopL} {
        width: 70px;
        height: 70px;
    }

    @media ${Device.desktop} {
        width: 70px;
        height: 70px;
    }
`;

const UserInfo = styled.div`
    width: calc(100% - 70px);
    height: 70px;
    padding: 0 20px;
    & > div {
        margin: 10px 0;
    }

    @media ${Device.mobileS} {
        width: calc(100% - 50px);
        height: 50px;
        padding: 0 10px;
    }

    @media ${Device.mobileM} {
        width: calc(100% - 60px);
        height: 70px;
        padding: 0 20px;
    }

    @media ${Device.mobileL} {
        width: calc(100% - 60px);
        height: 70px;
        padding: 0 20px;
    }

    @media ${Device.tablet} {
        width: calc(100% - 70px);
        height: 70px;
        padding: 0 20px;
    }

    @media ${Device.laptop} {
        width: calc(100% - 70px);
        height: 70px;
        padding: 0 20px;
    }

    @media ${Device.laptopL} {
        width: calc(100% - 70px);
        height: 70px;
        padding: 0 20px;
    }

    @media ${Device.desktop} {
        width: calc(100% - 70px);
        height: 70px;
        padding: 0 20px;
    }
`;

const Text = styled.div`
    width: ${props => props.width}px;
    height: 1rem;
    border-radius: 0.15rem;

    @media ${Device.mobileS} {
        width: ${props => props.width / 2}px;
    }

    @media ${Device.mobileM} {
        width: ${props => props.width / 1.5}px;
    }

    @media ${Device.mobileL} {
        width: ${props => props.width / 1.5}px;
    }

    @media ${Device.tablet} {
        width: ${props => props.width}px;
    }

    @media ${Device.laptop} {
        width: ${props => props.width}px;
    }

    @media ${Device.laptopL} {
        width: ${props => props.width}px;
    }

    @media ${Device.desktop} {
        width: ${props => props.width}px;
    }
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
