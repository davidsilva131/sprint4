import { restaurantsTypes } from "../types/restaurantsTypes";

const initialState = {
    restaurants: []
}

export const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case restaurantsTypes.GET_RESTAURANTS:
            return { ...state, restaurants: [...action.payload] }
        case restaurantsTypes.GET_SPECIFIC_RESTAURANT:
            return { ...state, restaurant: action.payload.restaurant }
        case restaurantsTypes.ADD_RESTAURANT:
            return { ...state, restaurants: [...action.payload] }
        default:
            return state
    }
}