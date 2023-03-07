import styles from "../../styles/componentsCss/GraphicTshirts/GraphicTshirts.module.css";

const CoverDisplay = () => {
  return (
    <div className={styles.tshirtDisplay}>
      <div className={styles.jerseyImage}>
        <img
          src="https://footballmonk.in/wp-content/uploads/2021/02/Juventus20Third20Jersey20Case20Cover20Customisable201.jpg"
          alt="cover"
          loading="lazy"
        />
      </div>
      <div className={`name pt-5 ${styles.paradiv}`}>
        <p className={`pb-2 `}>Mobile case</p>
        <button className={styles.buynow}>View More</button>
      </div>
    </div>
  );
};

export default CoverDisplay;
