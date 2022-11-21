import { orderTypes } from "../types/orderTypes";

export const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case orderTypes.SET_ORDER:
            return action.payload
        default:
            return state
    }
}