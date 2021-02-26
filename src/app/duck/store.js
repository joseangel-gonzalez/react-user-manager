import { configureStore } from '@reduxjs/toolkit';

import { saveState, loadState } from '../../lib/storage';
import { loginCreators } from '../login';
import createRootReducer from './reducers';
import createRootMiddleware from './middlewares';

export default history => {
    const preloadedState = loadState();
    const store = configureStore({
        reducer: createRootReducer(history),
        middleware: createRootMiddleware(history),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState
    });

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createRootReducer(history), loadState());
        });
    }

    store.subscribe(() => {
        const { login } = store.getState();
        saveState({ login });
    });

    const { login } = store.getState();
    if (login?.user.token) {
        setTimeout(
            () => store.dispatch(loginCreators.expireToken('Su token expiró. Inicie sesión de nuevo')),
            login.expiration
        );
    }

    return store;
};
