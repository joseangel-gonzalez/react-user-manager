import { configureStore } from '@reduxjs/toolkit';

import createRootReducer from './reducers';
import createRootMiddleware from './middlewares';

export default history => {
    const store = configureStore({
        reducer: createRootReducer(history),
        middleware: createRootMiddleware(history),
        devTools: process.env.NODE_ENV !== 'production'
    });

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store;
};
