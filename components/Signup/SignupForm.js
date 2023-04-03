import { useState } from "react";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../../pages/api/auth";
import Cookies from "js-cookie";
import { SET_CART_ID, SET_ID, SET_LOGGEDIN_STATUS } from "../../redux_store/reducers/UserStatus";
import styles from "../../styles/pagesCss/Account.module.css";
import { SET_DISPLAY_FAILURE, SET_DISPLAY_SUCCESS, SET_DISPLAY_TRUE, SET_MESSAGE } from "../../redux_store/reducers/Notifier";
import { useRouter } from "next/router";

const SignupForm = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await SIGNUP(email, password);
    console.log(response);
    if (response.id != null) {
      Cookies.set("id", response.id, { expires: 7 }); // expires in 7 days
      Cookies.set("cartId", response.cart.id, { expires: 7 }); // expires in 7 days
      dispatch(SET_ID(response.id));
      dispatch(SET_CART_ID(response.cart.id));
      dispatch(SET_LOGGEDIN_STATUS(true));
      dispatch(SET_DISPLAY_SUCCESS());
      dispatch(SET_MESSAGE("Account Created Successfully."));
      dispatch(SET_DISPLAY_TRUE());
      router.replace("/");
    } else {
      dispatch(SET_DISPLAY_FAILURE());
      dispatch(SET_LOGGEDIN_STATUS(false));
      dispatch(SET_MESSAGE("User with this email already exists "));
      dispatch(SET_DISPLAY_TRUE());
    }
  };

  return (
    <div className={styles.loginForm}>
      <h1>REGISTER</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.username} htmlFor="Username">
          Email
        </label>
        <input
          type="email"
          id="username"
          name="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          minLength="4"
        />
        <div className={styles.regPara}>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>
        <div className={styles.formSubmitReg}>
          <button type="submit" className={styles.formButton}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
