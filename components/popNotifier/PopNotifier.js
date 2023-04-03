import React, { useEffect, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { SET_DISPLAY_FALSE } from "../../redux_store/reducers/Notifier";
import styles from "../../styles/componentsCss/popNotifier/PopNotifier.module.css";
const PopNotifier = () => {
  const { message } = useSelector((state) => state.notifier);
  const { display } = useSelector((state) => state.notifier);
  const { messageType } = useSelector((state) => state.notifier);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(true);
    if (display) {
      setTimeout(() => {
        dispatch(SET_DISPLAY_FALSE());
      }, 3000);
    }
  }, [display]);

  const removeNotifier = () => {
    dispatch(SET_DISPLAY_FALSE());
  };
  return (
    <>
      {display === true && (
        <div className={styles.notification}>
          <div
            className={messageType==="success" ? styles.success : styles.error}
          >
            <p>{message || "Text to display"}</p>
            <FcCancel size={25} onClick={() => removeNotifier()} />
          </div>
        </div>
      )}
    </>
  );
};

export default PopNotifier;
