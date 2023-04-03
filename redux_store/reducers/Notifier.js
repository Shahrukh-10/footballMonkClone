import { createSlice } from "@reduxjs/toolkit";

const notifierSlice = createSlice({
  name: "notifier",
  initialState: {
    message: null,
    messageType: "success",
    display: "undefined",
  },
  reducers: {
    SET_MESSAGE(state, action) {
      state.message = action.payload;
    },
    SET_DISPLAY_TRUE(state, action) {
      state.display = true;
    },
    SET_DISPLAY_FALSE(state, action) {
      state.display = false;
    },
    SET_DISPLAY_SUCCESS(state, action) {
      state.messageType = "success";
    },
    SET_DISPLAY_FAILURE(state, action) {
      state.messageType = "failure";
    },
  },
});

export const {
  SET_MESSAGE,
  SET_DISPLAY_TRUE,
  SET_DISPLAY_FALSE,
  SET_DISPLAY_SUCCESS,
  SET_DISPLAY_FAILURE,
} = notifierSlice.actions;
export default notifierSlice.reducer;
