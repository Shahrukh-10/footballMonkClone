import {
  SET_CART_ID,
  SET_ID,
  SET_LOGGEDIN_STATUS,
} from "../redux_store/reducers/UserStatus";

export const SET_INITIAL_DATA = (Cookies, dispatch) => {
  const id = Cookies.get("id");
  const cartId = Cookies.get("cartId");
  console.log(id,cartId);
  if (cartId != undefined && id != undefined) {
    dispatch(SET_ID(id));
    dispatch(SET_CART_ID(cartId));
    dispatch(SET_LOGGEDIN_STATUS(true));
  }
};
