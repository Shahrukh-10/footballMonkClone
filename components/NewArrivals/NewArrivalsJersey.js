import Link from "next/link";
import styles from "../../styles/componentsCss/GraphicTshirts/GraphicTshirts.module.css";

const NewArrivalsJersey = () => {
  return (
    <div className={styles.tshirtDisplay}>
      <div className={styles.image}>
        <img
          src="https://footballmonk.in/wp-content/uploads/2022/07/Arsenal-away-22-23-1.jpg"
          loading="lazy"
          alt="newarrival jerseys"
        />
      </div>
      <div className={`name pt-5 ${styles.paradiv}`}>
        <p className={`pb-2 `}>New jerseys</p>
        <Link href="/product/prodName"><button className={styles.buynow}>Select Options</button></Link>
      </div>
    </div>
  );
};

export default NewArrivalsJersey;
