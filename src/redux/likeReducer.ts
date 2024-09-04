import { Action } from '@reduxjs/toolkit'

type LikeState = {
    [id: number]: boolean
}

const initialState: LikeState = {
    1: true,
    2: true,
}

const likeReducer = (state = initialState, action: Action) => {
    return state
}

export default likeReducer
