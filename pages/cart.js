import styles from "../styles/pagesCss/Cart.module.css";
import { useSelector } from "react-redux";
import CartElement from "../components/cartElement/CartElement";
import ResponiveCart from "../components/cartElement/ResponiveCart";

const Cart = () => {
  const { screenWidth } = useSelector((state) => state.navbar);

  return (
    <>
      <div className={styles.cart}>
        <CartElement />
        <CartElement />
        <CartElement />
        <CartElement />
        <CartElement />
      </div>
      <div className={styles.responsiveCart}>
        <ResponiveCart />
        <ResponiveCart />
        <ResponiveCart />
        <ResponiveCart />
        <ResponiveCart />
      </div>
      <div className={styles.checkoutBlock}>
        <div className={styles.cartTotal}>
          <div className={styles.headingTotal}>
            <h1>Cart Totals</h1>
          </div>
          <div className={styles.amountTotal}>
            <div className={styles.subTotals}>
              <div>
                <p>Subtotal</p>
              </div>
              <div>
                <p className={styles.amount}>400</p>
              </div>
            </div>
            <div className={styles.totals}>
              <div>
                <p>Total</p>
              </div>
              <div>
                <p className={styles.amount}>400</p>
              </div>
            </div>
          </div>
        <div className={styles.checkout}>
          <button>Proceed to Checkout</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
