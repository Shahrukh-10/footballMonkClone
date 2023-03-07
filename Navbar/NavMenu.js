import styles from "../../styles/componentsCss/navbar/Navbar.module.css";
import { motion } from "framer-motion";
import {  useSelector } from "react-redux";

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
          <li className={styles.listElement}>Home</li>
          <li className={styles.listElement}>Football Jerseys</li>
          <li className={styles.listElement}>Graphic Tshirts</li>
          <li className={styles.listElement}>Season 22/23</li>
          <li className={styles.listElement}>Season 21/22</li>
          <li className={styles.listElement}>Customized Jerseys</li>
          <li className={styles.listElement}>International Jerseys</li>
        </ul>
      </motion.div>
  );
};

export default NavMenu;
