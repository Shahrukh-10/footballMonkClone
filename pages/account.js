import LoginForm from "../components/Login/LoginForm";
import SignupForm from "../components/Signup/SignupForm";
import styles from "../styles/pagesCss/Account.module.css";

const Account = () => {
  return (
    <div className={styles.accountPage}>
      <div className={styles.left}>
        <div className={styles.blackBar}>
          <p>
            Dear customers,
            <br /> Once your order is dispatched, you will be notified with the
            tracking ID via SMS and Email.
          </p>
        </div>
        <div className={styles.forms}>
          <LoginForm />
          <SignupForm />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.right}>
        <ul className={styles.listAccountPage}>
            <h1>Categories</h1>
          
          <li>BUY @ ₹699</li>
          <li>CLUB TANK TOPS</li>
          <li>CUSTOMIZED JERSEYS</li>
          <li>FOOTBALL JERSEY</li>
          <li>GRAPHIC TSHIRTS</li>
          <li>HUMAN RACE</li>
          <li>INTERNATIONAL JERSEYS</li>
          <li>MESSI & RONALDO</li>
          <li>PHONE CASE COVER</li>
          <li>PLAYER VERSION</li>
          <li>SEASON 20/21</li>
          <li>SEASON 21/22</li>
          <li>SEASON 22/23</li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
