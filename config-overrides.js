const { override, addWebpackAlias } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');

/* config-overrides.js */
module.exports = override(
    rewireReactHotLoader(),
    addWebpackAlias({
        'react-dom': '@hot-loader/react-dom'
    })
);
