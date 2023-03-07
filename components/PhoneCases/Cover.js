import styles from "../../styles/componentsCss/GraphicTshirts/GraphicTshirts.module.css";
import CoverDisplay from "./CoverDisplay";

const Cover = () => {
  return (
    <div className={styles.grpahicTshirts}>
      <div className={styles.graphicHeading}>
        <h1 className={styles.heading}>Football Jerseys</h1>
        <div className={styles.border} />
      </div>
      <p className={styles.paragraph}>
        Best Quality Football Jerseys online in India
      </p>
      <div className={styles.listTshirts}>
        <CoverDisplay />
        <CoverDisplay />
        <CoverDisplay />
        <CoverDisplay />
      </div>
    </div>
  );
};

export default Cover;
