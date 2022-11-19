import { orderTypes } from "../types/orderTypes";

export const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case orderTypes.SET_ORDER:
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}