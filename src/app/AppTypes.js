import { PropTypes } from 'prop-types';

const AppTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    enum: PropTypes.exact({
        sym: PropTypes.symbol,
        value: PropTypes.number,
        description: PropTypes.string
    }),
    error: PropTypes.instanceOf(Error),
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default AppTypes;
