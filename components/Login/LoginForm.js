import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'
import { LOGIN } from "../../pages/api/auth";
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie';

import styles from "../../styles/pagesCss/Account.module.css";
import { SET_ID, SET_LOGGEDIN_STATUS } from "../../redux_store/reducers/UserStatus";
import { SET_DISPLAY_FAILURE, SET_DISPLAY_SUCCESS, SET_DISPLAY_TRUE, SET_MESSAGE } from "../../redux_store/reducers/Notifier";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await LOGIN(email, password);
    console.log(response);
    if (response.id!=null) {
      Cookies.set('id', response.id , { expires: 7 }); // expires in 7 days
      dispatch(SET_ID(response.id))
      dispatch(SET_LOGGEDIN_STATUS(true))
      dispatch(SET_DISPLAY_SUCCESS())
      dispatch(SET_MESSAGE("Logged in successfully."))
      dispatch(SET_DISPLAY_TRUE())
      router.replace("/")
    }else{
      dispatch(SET_DISPLAY_FAILURE());
      dispatch(SET_LOGGEDIN_STATUS(false))
      dispatch(SET_MESSAGE("Invalid credentials"))
      dispatch(SET_DISPLAY_TRUE())
    }
  };

  return (
    <div className={styles.loginForm}>
      <h1>LOGIN</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.username} htmlFor="Email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
          minLength="4"
        />
        <div className={styles.formSubmit}>
          <button type="submit" className={styles.formButton}>
            Login
          </button>
          <Link href="/forgotPassword">
            <p className="hover:text-blue-600 text-sm">Fortgot password ? </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
