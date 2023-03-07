import styles from "../../styles/componentsCss/footer/Footer.module.css";
import { FaLinkedin, FaGithubSquare, FaSearch } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={styles.mainFooterContent}>
        <div className={styles.info}>
          <h2>Info</h2>
          <p>Home</p>
          <p>Contact Us</p>
          <p>My Account</p>
          <p>Terms & Condition</p>
        </div>
        <div className={styles.shopby}>
        <h2>Shop by</h2>

          <p>FC Barcelona</p>
          <p>Real Madrid</p>
          <p>Juventus</p>
          <p>Liverpool</p>
        </div>
        <div className={styles.socials}>
          <h2>Follow us</h2>
          <div className={styles.socialIcons}>
            <button>
              <FaLinkedin className={styles.icons} color="blue" size={40} />
            </button>
            <button>
              <FaGithubSquare className={styles.icons} color="purple" size={40} />
            </button>
          </div>
          <div className={styles.subscribeInput}>
            <input type="text" placeholder="Search.."/>
            <div className={styles.search}>
              <FaSearch className={styles.searchicon} color="grey" size={30} />
            </div>
          </div>
        </div>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            loading="lazy"
            width={300}
            height={300}
            alt="logo"
          />
        </div>
      </div>

      <div className={styles.paymentForms}>
        <img src="https://footballmonk.in/wp-content/uploads/2019/07/payment-option-footballmonk.png" 
        loading="lazy"
        alt="paymentforms" />
      </div>
    </div>
  );
};

export default Footer;
