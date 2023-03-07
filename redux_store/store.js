import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/NavOperations"

export default configureStore({
    reducer:{
        navbar:navbarReducer
    }
})