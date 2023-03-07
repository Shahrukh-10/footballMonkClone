import styles from "../../styles/componentsCss/GraphicTshirts/GraphicTshirts.module.css";
import NewArrivalsJersey from "./NewArrivalsJersey";

const NewArrivals = () => {
  return (
    <div className={`${styles.grpahicTshirts}`}>
      <div className={styles.graphicHeading}>
        <h1 className={styles.heading}>New Arrivals</h1>
        <div className={styles.border} />
      </div>
      <p className={styles.paragraph}>New Season 2022-23 Jerseys Online in India
</p>
      <div className={styles.listTshirts}>
            <NewArrivalsJersey />
            <NewArrivalsJersey />
            <NewArrivalsJersey />
            <NewArrivalsJersey />
            <NewArrivalsJersey />
            <NewArrivalsJersey />
            <NewArrivalsJersey />
            <NewArrivalsJersey />
      </div>
    </div>
  );
};

export default NewArrivals;
