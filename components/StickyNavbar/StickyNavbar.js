import Typewriter from 'typewriter-effect';
import { useSelector } from "react-redux";
import styles from "../../styles/componentsCss/stickyNavbar/Sticky.module.css";
import { useScrollY } from "../../utils/helperFunctions";
const StickyNavbar = () => {
  const { screenWidth } = useSelector((state) => state.navbar);
  const { scrollY } = useScrollY();

  const DisplayOffer = () => {
    

    return (
      <div id='typewriter' className="w-[100%] h-12 bg-red-500 flex justify-center items-center text-white font-semibold font-mono text-justify px-2">
          <Typewriter
            options={{
              strings: ["Hello my name is Shahrukh :)", "This is my new Website." ,"Buy 3 Jerseys, get Flat 250 off. Use Coupon code B3F250."],
              autoStart: true,
              loop: true,
              pauseFor:1500,
              cursor:"_",
              delay:20,
              deleteSpeed:50
            }}
          />
      </div>
    );
  };

  if (screenWidth < 1400 && screenWidth >= 862) {
    return (
      <>
        <div
          className={`${styles.stickyNavbar} ${
            scrollY > 183.49 && styles.fixed
          }`}
        >
          <div className={styles.navListR}>
            <ul className={styles.listResponsive}>
              <li className={styles.listElement}>Home</li>
              <li className={styles.listElement}>Football Jerseys</li>
              <li className={styles.listElement}>Graphic Tshirts</li>
              <li className={styles.listElement}>Season 22/23</li>
              <li className={styles.listElement}>Season 21/22</li>
              <li className={styles.listElement}>Customized Jerseys</li>
              <li className={styles.listElement}>International Jerseys</li>
            </ul>
          </div>
        </div>
        <DisplayOffer />
      </>
    );
  }
  return (
    <>
      <div
        className={`${styles.stickyNavbar} ${scrollY > 183.49 && styles.fixed}`}
      >
        <div className={`${styles.introHeading}`}>
          {screenWidth > 861 ? (
            <p>Play like your hero </p>
          ) : (
            <p>Play like your hero ! </p>
          )}
        </div>
        <div className={styles.navList}>
          <ul className={styles.list}>
            <li className={styles.listElement}>Home</li>
            <li className={styles.listElement}>Football Jerseys</li>
            <li className={styles.listElement}>Graphic Tshirts</li>
            <li className={styles.listElement}>Season 22/23</li>
            <li className={styles.listElement}>Season 21/22</li>
            <li className={styles.listElement}>Customized Jerseys</li>
            <li className={styles.listElement}>International Jerseys</li>
          </ul>
        </div>
      </div>
      <DisplayOffer />
    </>
  );
};

export default StickyNavbar;
