import Link from "next/link";
import styles from "../../styles/pagesCss/Account.module.css";

const SignupForm = () => {
  return (
    <div className={styles.loginForm}>
      <h1>REGISTER</h1>
      <form className={styles.form}>
        <label className={styles.username} htmlFor="Username">
          Email
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          minLength="4"
          placeholder="email"
        />
        <label className={styles.password} htmlFor="Password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
          minLength="4"
        />
        <div className={styles.regPara}><p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p></div>
        <div className={styles.formSubmitReg}>
          <button className={styles.formButton}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
