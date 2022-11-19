import { orderTypes } from "../types/orderTypes";

export const setActualOrder = (order) => {
    console.log(order);
    return {
        type: orderTypes.SET_ORDER,
        payload: order
    }
}