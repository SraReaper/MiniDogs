import { combineReducers, configureStore } from '@reduxjs/toolkit';
import login from './login';
import photos from './photos';
import localStorage from './middleware/localStorage';

const middlewares = [localStorage];

const reducer = combineReducers({ login, photos });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;
