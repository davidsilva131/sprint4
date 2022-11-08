import { userTypes } from "../types/userTypes";

export const userReducer = (state = {}, action) => {

    switch (action.type) {

        case userTypes.CREATE_USER:

            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                error: action.payload.error
            }

        case userTypes.LOGIN_USER:
            return action.payload

        default:
            return state;

    }
}