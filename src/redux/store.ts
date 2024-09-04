import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
    },
    // Настройка для включения Redux DevTools
    devTools: process.env.NODE_ENV !== 'production',
})
