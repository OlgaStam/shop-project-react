import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'

// Создание хранилища Redux
export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer, // Использование редьюсера
    },
    // Настройка для включения Redux DevTools
    devTools: process.env.NODE_ENV !== 'production',
})

// Тип состояния хранилища
export type RootState = ReturnType<typeof store.getState>
// Тип диспетчера хранилища
export type AppDispatch = typeof store.dispatch
