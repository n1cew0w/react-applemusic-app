import {configureStore} from "@reduxjs/toolkit";
import {shazamCoreApi} from "./shazamCore/shazamCore.api";
import playerReducer from './playerSlice'
export const store = configureStore({
    reducer: {
        [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
        player: playerReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
})