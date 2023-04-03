import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/NavOperations"
import cartAmountReducer from "./reducers/TotalAmountCheckout"
import userStatusReducer from "./reducers/UserStatus"
import notifierReducer from "./reducers/Notifier"

export default configureStore({
    reducer:{
        navbar:navbarReducer,
        cartAmount : cartAmountReducer,
        notifier : notifierReducer,
        userStatus : userStatusReducer
    }
})