import styles from "../../styles/componentsCss/navbar/Navbar.module.css";
import { motion } from "framer-motion";
import {  useSelector } from "react-redux";
import Link from "next/link";

const NavMenu = () => {
  const {openNavigation} = useSelector((state) => state.navbar);
  const menuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
      <motion.div
        className={`${styles.navMenu} `}
        variants={menuVariants}
        animate={openNavigation ? "visible" : "hidden"}
        initial="hidden"
      >
        <ul className={styles.list}>
          <li className={styles.listElement}><Link href="/product-category/sa">Home</Link></li>
          <li className={styles.listElement}><Link href="/product-category/sa">Football Jerseys</Link></li>
          <li className={styles.listElement}><Link href="/product-category/sa">Graphic Tshirts</Link></li>
          <li className={styles.listElement}><Link href="/product-category/sa">Season 22</Link>/23</li>
          <li className={styles.listElement}><Link href="/product-category/sa">Season 21</Link>/22</li>
          <li className={styles.listElement}><Link href="/product-category/sa">Customized Jerseys</Link></li>
          <li className={styles.listElement}><Link href="/product-category/sa">International Jerseys</Link></li>
        </ul>
      </motion.div>
  );
};

export default NavMenu;
