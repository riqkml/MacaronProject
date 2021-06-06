import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducerApp from './index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['mainReducer'],
    whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducerApp);
const Store = createStore(persistedReducer, applyMiddleware(thunk));
const Persistor = persistStore(Store);

export { Store, Persistor };