import {
  SET_DISPLAY_SUCCESS,
  SET_DISPLAY_TRUE,
  SET_MESSAGE,
} from "../frontend/redux_store/reducers/Notifier";
import {
  SET_ID,
  SET_LOGGEDIN_STATUS,
} from "../frontend/redux_store/reducers/UserStatus";

const Logout = (Cookies, dispatch) => {
  Cookies.remove("id");
  Cookies.remove("cartId");
  dispatch(SET_LOGGEDIN_STATUS(false));
  dispatch(SET_ID(null));
  dispatch(SET_DISPLAY_SUCCESS());
  dispatch(SET_MESSAGE("Logged out successfully"));
  dispatch(SET_DISPLAY_TRUE());
};
export default Logout;
