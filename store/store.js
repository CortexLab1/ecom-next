import {
    applyMiddleware,
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import userReducer from './Features/Users/userSlice';
import productsReducer from './Features/Products/productSlice';
import wishlistReducer from './Features/WishList/wishlistSlice';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

const storage = require('redux-persist/lib/storage').default;

const combinedReducers = combineReducers({
    user: userReducer,
    wishlist: wishlistReducer,
    products: productsReducer,
});

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
    if (isServer) {
        return configureStore({
            reducer: combineReducers,
            middleware: [thunkMiddleware],
        });
    } else {
        const { persistStore, persistReducer } = require('redux-persist');

        const persistConfig = {
            key: 'nextjs',
            whitelist: ['user'],
            storage, // if needed, use a safer storage
            stateReconciler: autoMergeLevel1,
        };
        const persistedReducer = persistReducer(
            persistConfig,
            combinedReducers,
        );
        const store = configureStore({
            reducer: persistedReducer,
            middleware: [thunkMiddleware],
        });
        store.__persistor = persistStore(store);
        return store;
    }
};
export const wrapper = createWrapper(makeStore, { debug: true });
