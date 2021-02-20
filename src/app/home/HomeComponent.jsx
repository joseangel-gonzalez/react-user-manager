import React from 'react';
import { PropTypes } from 'prop-types';

const HomeComponent = ({ browser }) => <div>{`Es un navegador? ${browser}`}</div>;

HomeComponent.propTypes = {
    browser: PropTypes.bool
};

export default HomeComponent;
