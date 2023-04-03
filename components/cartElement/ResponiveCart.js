import styles from "../../styles/pagesCss/Cart.module.css";
import { MdOutlineCancel } from "react-icons/md";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_AMOUNT } from "../../redux_store/reducers/TotalAmountCheckout";

const ResponiveCart = () => {
  const dispatch = useDispatch()
  const { totalAmountCheckout } = useSelector((state) => state.cartAmount);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(1);
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
    <div className="py-4 mb-4 border-2 px-4">
      <div className={styles.productImage}>
        <div className={styles.cartImageResponsive}>
          <img
            src="https://footballmonk.in/wp-content/uploads/2022/07/bayern-home-22-23-1.jpg"
            alt="cart_item_image"
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productr}>
          <h1>Name</h1>
          <p>fjjfd</p>
        </div>
        <div className={styles.productr}>
          <h1>Price</h1>
          <p>₹999</p>
        </div>
        <div className={styles.productr}>
          <h1>Quantity</h1>
          <div className={styles.quantitys}>
            <div className={styles.block1r} onClick={()=>decrementQuantity()}>-</div>
            <div className={styles.block2r}>{cartQuantity}</div>
            <div className={styles.block3r} onClick={()=>incrementQuantity()}>+</div>
          </div>
        </div>
        <div className={styles.productr}>
          <h1>subtotal</h1>
          <p>{totalPrice}</p>
        </div>
      </div>
      <div className={styles.coupounSectionr}>
        <div className={styles.inputr}>
          <input type="text" placeholder="Coupoun" />
          <div className={styles.cartButtons}>
          <button className={`${styles.cartButtonr} ${styles.coupoun}`}>Apply Coupoun</button>
          <button className={`${styles.cartButtonr} `} onClick={()=>updateCart()}>Update Cart</button>
          </div>
        </div>
      </div>

      <MdOutlineCancel className={styles.removeIcon} size={30} color="black" />
    </div>
  );
};

export default ResponiveCart;
