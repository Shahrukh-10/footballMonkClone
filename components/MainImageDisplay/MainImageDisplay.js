import { FaTruckMoving } from "react-icons/fa";
import styles from "../../styles/componentsCss/mainImageDisplay/MainImageDisplaly.module.css";
import {FaPercent} from "react-icons/fa"
import { RiMailOpenLine } from "react-icons/ri";

const MainImageDisplay = () => {
  return (
    <div className={`${styles.mainImageDisplay} pb-[4rem]`}>
      <img
        className={styles.mainImage}
        src="https://footballmonk.in/wp-content/uploads/2023/01/Graphic-tee-banner-comp-1.jpg"
        alt="mainImageDisplay"
      />
      <div className={styles.freeServices}>
        <div className={styles.service1}>
            <FaTruckMoving className={styles.icon}  size={50} color="white"/>
            <h1 className={styles.heading}>Free Shipping</h1>
            <p className={styles.paragraph}>On all prepaid orders.</p>
        </div>
        <div className={styles.service2}>
            <FaPercent  className={styles.icons}  size={45} color="white"/>
            <h1 className={styles.heading}>100% best quality</h1>
            <p className={styles.paragraph}>On all prepaid orders.</p>
        </div>
        <div className={styles.service3}>
            <RiMailOpenLine className={styles.icon}  size={50} color="white"/>
            <h1 className={styles.heading}>Support</h1>
            <p className={styles.paragraph}>Mail us @ <a href="mailto:shahrukhkhanofficial76@gmail.com" className={styles.heading}>shahrukhkhanofficial76@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default MainImageDisplay;
