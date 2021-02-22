import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const ModalBlock = styled.div`
    align-items: center;
    bottom: 0;
    justify-content: center;
    left: 0;
    overflow: hidden;
    padding: 0.4rem;
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    opacity: 1;
    z-index: 400;
`;

const ModalOverlay = styled.a`
    background: grey;
    opacity: 0.5;
    bottom: 0;
    cursor: default;
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`;

const ModalClose = styled.a`
    float: right !important;
    text-decoration: none !important;
    cursor: pointer;
    font-size: 1rem;
`;

const ModalContainer = styled.div`
    background: #ffffff;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    max-height: 75vh;
    max-width: 850px;
    padding: 0 0.8rem;
    width: 100%;
    animation: slide-down 0.2s ease 1;
    z-index: 1;
    box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

const ModalBody = styled.div`
    overflow-y: auto;
    padding: 30px 10px;
    position: relative;
`;

const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #303742;
    padding: 20px 5px 10px 5px;
`;

const ModalTitle = styled.span`
    font-size: 30px;
    font-weight: 500;
`;

const ModalFooter = styled.div`
    padding: 10px 0px;
    text-align: right;
`;

const Modal = ({ title, footer, children, active, hideModal }) => (
    <>
        {active && (
            <ModalBlock>
                <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
                <ModalContainer>
                    <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalClose onClick={() => hideModal()}>X</ModalClose>
                    </ModalHeader>
                    <ModalBody>{children}</ModalBody>
                    <ModalFooter>{footer}</ModalFooter>
                </ModalContainer>
            </ModalBlock>
        )}
    </>
);

Modal.propTypes = {
    title: PropTypes.string,
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    active: PropTypes.bool,
    hideModal: PropTypes.func.isRequired
};

export default Modal;
