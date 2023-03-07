import styles from "../../styles/pagesCss/Cart.module.css";
import { MdOutlineCancel } from "react-icons/md";

const CartElement = () => {
  return (
    <div className="py-10">
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
              <div className={styles.block1}>+</div>
              <div className={styles.block2}>1</div>
              <div className={styles.block3}>+</div>
            </li>
            <li className={styles.productPrice}>₹999</li>
          </ul>
        </div>
      </div>
      <div className={styles.coupounSection}>
        <div className={styles.input}>
          <input type="text" placeholder="Coupoun" />
          <button className={styles.cartButton}>Apply Coupoun</button>
        </div>
        <div>
          <button className={styles.cartButton}>Update Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartElement