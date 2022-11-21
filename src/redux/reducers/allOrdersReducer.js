import { allOrdersTypes } from "../types/allOrdersTypes"

export const allOrdersReducer = (state = [], action) => {
    switch (action.type) {
        case allOrdersTypes.GET_ORDERS:
            return [...action.payload]
        case allOrdersTypes.NEW_ORDER:
            return [...state, action.payload]
        default:
            return state
    }
}