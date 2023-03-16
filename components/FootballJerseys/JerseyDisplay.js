import Link from "next/link";
import styles from "../../styles/componentsCss/GraphicTshirts/GraphicTshirts.module.css";

const JerseyDisplay = () => {
  return (
    <div className={styles.tshirtDisplay}>
      <div className={styles.jerseyImage}>
        <img
          src="https://footballmonk.in/wp-content/uploads/2021/10/psg-home-messi-1.jpg"
          alt="jersey"
          loading="lazy"
        />
      </div>
      <div className={`name pt-5 ${styles.paradiv}`}>
        <p className={`pb-2 `}>Uefa tshirt ronaldo</p>
        <Link href="/product/prodName">
          <button className={styles.buynow}>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default JerseyDisplay;
