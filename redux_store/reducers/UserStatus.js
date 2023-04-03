import { createSlice } from "@reduxjs/toolkit";

const userStatusSlice = createSlice({
  name: "userStatus",
  initialState: {
    id: null,
    cartId:null,
    loggedIn: false,
  },
  reducers:{
    SET_LOGGEDIN_STATUS(state,action){
        state.loggedIn = action.payload;
    },
    SET_ID(state,action){
        state.id = action.payload;
    },
    SET_CART_ID(state,action){
      state.cartId = action.payload;
  }
  }
});

export const { SET_LOGGEDIN_STATUS,SET_ID,SET_CART_ID } =
  userStatusSlice.actions;
export default userStatusSlice.reducer;
