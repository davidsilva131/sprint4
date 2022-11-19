import { orderReducer } from "../reducers/orderReducer";
import { restaurantsReducer } from "../reducers/restaurantsReducer";
import { userReducer } from "../reducers/userReducer";
const { configureStore } = require("@reduxjs/toolkit");

const reducer = {
    user: userReducer,
    restaurants: restaurantsReducer,
    actualOrder: orderReducer
};
const store = configureStore({
    reducer,
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;