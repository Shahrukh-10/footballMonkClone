import styles from "../../styles/pagesCss/Cart.module.css";
import { MdOutlineCancel } from "react-icons/md";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_AMOUNT } from "../../redux_store/reducers/TotalAmountCheckout";

const CartElement = () => {
  const dispatch = useDispatch();
  const { totalAmountCheckout } = useSelector((state) => state.cartAmount);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const totalPrice = useMemo(() => {
    return 999 * cartQuantity;
  }, [cartQuantity]);
  const incrementQuantity = () => {
    setCartQuantity(cartQuantity + 1);
  };
  const decrementQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    } else {
      alert("Can't be zero.");
    }
  };
  const updateCart = () => {
    if (totalPrice > totalAmount) {
      dispatch(UPDATE_AMOUNT(totalAmountCheckout + (totalPrice - totalAmount)));
      setTotalAmount(totalPrice);
    } else if (totalAmount > totalPrice) {
      dispatch(UPDATE_AMOUNT(totalAmountCheckout - (totalAmount - totalPrice)));
      setTotalAmount(totalPrice);
    }
  };
  return (
    <div className="py-5">
      <div className={styles.heading}>
        <ul className={styles.headingList}>
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>SubTotal</li>
        </ul>
      </div>
      <div className={styles.cartItem}>
        <div className={styles.item}>
          <ul className={styles.itemUl}>
            <li className={`pl-6`}>
              <MdOutlineCancel size={30} color="black" />
            </li>
            <li className={styles.cartImage}>
              <img
                src="https://footballmonk.in/wp-content/uploads/2022/07/bayern-home-22-23-1.jpg"
                alt="cart_item_image"
                loading="lazy"
              />
            </li>
            <li>
              <div className={styles.productDetails}>
                <ul className={styles.product}>
                  <li>Product Name</li>
                  <li>Size : L</li>
                  <ul>
                    <li>Estimated Delivery : </li>
                    <li>On 13 - 14 March, 2023</li>
                  </ul>
                </ul>
              </div>
            </li>
            <li className={styles.productPrice}>₹999</li>
            <li className={styles.quantity}>
              <div
                className={styles.block1}
                onClick={() => decrementQuantity()}
              >
                -
              </div>
              <div className={styles.block2}>{cartQuantity}</div>
              <div
                className={styles.block3}
                onClick={() => incrementQuantity()}
              >
                +
              </div>
            </li>
            <li className={styles.productPrice}>₹{totalPrice}</li>
          </ul>
        </div>
      </div>
      <div className={styles.coupounSection}>
        <div className={styles.input}>
          <input type="text" placeholder="Coupoun" />
          <button className={styles.cartButton}>Apply Coupoun</button>
        </div>
        <div>
          <button className={styles.cartButton} onClick={() => updateCart()}>
            Update Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartElement;
