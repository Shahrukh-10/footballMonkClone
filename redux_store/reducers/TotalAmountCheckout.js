import { createSlice } from "@reduxjs/toolkit";

const cartAmountSlice = createSlice({
  name: "cartAmount",
  initialState: {
    totalAmountCheckout : 0
  },
  reducers: {
    UPDATE_AMOUNT(state,action){
        state.totalAmountCheckout = action.payload;
    }
  },
});

export const { UPDATE_AMOUNT } =
cartAmountSlice.actions;
export default cartAmountSlice.reducer;
