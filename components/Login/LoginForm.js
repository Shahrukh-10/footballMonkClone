import Link from "next/link";
import styles from "../../styles/pagesCss/Account.module.css";

const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <h1>LOGIN</h1>
      <form className={styles.form}>
        <label className={styles.username} htmlFor="Username">
          Username or Email
        </label>
        <input
          type="text"
          id="usernameLogin"
          name="username"
          placeholder="username"
          required
          minLength="4"
        />
        <label className={styles.password} htmlFor="Password">
          Password
        </label>
        <input
          type="password"
          id="passwordLogin"
          name="password"
          placeholder="password"
          required
          minLength="4"
        />
        <div className={styles.formSubmit}>
          <button className={styles.formButton}>Login</button>
          <Link href="/forgotPassword">
            <p className="hover:text-blue-600 text-sm">Fortgot password ? </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
