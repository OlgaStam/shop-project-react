import { createAction, createReducer } from '@reduxjs/toolkit'

// Тип состояния, в котором ключом является id, а значением — boolean
type LikeState = {
    [id: number]: boolean
}

// Действие, которое принимает число (id) как полезную нагрузку (payload)
export const toggleLike = createAction<number>('TOGGLE_LIKE')

// Начальное состояние с заранее лайкнутыми элементами
const initialState: LikeState = {
    1: true,
    3: true,
}

// Редьюсер, который изменяет состояние на основе переданного id
const likeReducer = createReducer(initialState, (builder) => {
    builder.addCase(toggleLike, (state, action) => {
        // В payload приходит id товара, для которого меняется статус лайка
        state[action.payload] = !state[action.payload]
    })
})

export default likeReducer
