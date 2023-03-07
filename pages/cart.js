import styles from "../styles/pagesCss/Cart.module.css";
import { useSelector } from "react-redux";
import CartElement from "../components/cartElement/CartElement";
import ResponiveCart from "../components/cartElement/ResponiveCart";

const Cart = () => {
  const { screenWidth } = useSelector((state) => state.navbar);

  return (
    <>
      {screenWidth > 580 ? (
        <div className={styles.cart}>
          <CartElement />
          <CartElement />
          <CartElement />
          <CartElement />
          <CartElement />
        </div>
      ) : (
        <div className={styles.responsiveCart}>
          <ResponiveCart />
          <ResponiveCart />
          <ResponiveCart />
          <ResponiveCart />
          <ResponiveCart />
        </div>
      )}
    </>
  );
};

export default Cart;
