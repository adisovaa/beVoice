import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "./planetReducer";

const store = configureStore({
    reducer: {
        planet: planetReducer
    }
});

export default store;
