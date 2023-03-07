import styles from "../../styles/componentsCss/GraphicTshirts/GraphicTshirts.module.css";

const TshirtDisplay = () => {
  return (
    <div className={styles.tshirtDisplay}>
      <div className={styles.image}>
        <img
          src="https://footballmonk.in/wp-content/uploads/2023/01/UEFA-CRISTIANO-LEAGUE-White.jpg"
          alt="tshirt"
          loading="lazy"
        />
      </div>
      <div className={`name pt-5 ${styles.paradiv}`}>
        <p className={`pb-2 `}>Uefa tshirt ronaldo</p>
      <button className={styles.buynow}>Buy Now</button>
      </div>
    </div>
  );
};

export default TshirtDisplay;
