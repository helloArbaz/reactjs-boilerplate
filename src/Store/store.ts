import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { demoApi } from "../Services/demo";
import { logger } from "redux-logger"

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { setupListeners } from "@reduxjs/toolkit/query";
import { userSlice } from "./features/userSlice";



const reducers = combineReducers({
    ['user']: userSlice.reducer,
    [demoApi.reducerPath]: demoApi.reducer,
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    timeout: 10,
}

const persistedReducer = persistReducer(persistConfig, reducers);
const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [...reduxPersistActions],
            },
        }).concat(demoApi.middleware, logger,)
    ,
})

setupListeners(store.dispatch)

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector