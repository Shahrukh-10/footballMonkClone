import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    openSearch: false,
    openNavigation: false,
    screenWidth : 0,
  },
  reducers: {
    OPEN_SEARCH(state, action) {
      state.openSearch = true;
    },
    CLOSE_SEARCH(state, action) {
      state.openSearch = false;
    },
    OPEN_NAVIGATION(state, action) {
      state.openNavigation = true;
    },
    CLOSE_NAVIGATION(state, action) {
      state.openNavigation = false;
    },
    SET_SCREEN_WIDTH(state, action) {
      state.screenWidth = action.payload;
    },
  },
});

export const { OPEN_SEARCH,SET_SCREEN_WIDTH, OPEN_NAVIGATION, CLOSE_SEARCH, CLOSE_NAVIGATION } =
  navbarSlice.actions;
export default navbarSlice.reducer;
