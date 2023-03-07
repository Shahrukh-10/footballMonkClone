import styles from "../../styles/componentsCss/GraphicTshirts/GraphicTshirts.module.css";
import JerseyDisplay from "./JerseyDisplay";

const FootballJerseys = () => {
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
        <JerseyDisplay />
        <JerseyDisplay />
        <JerseyDisplay />
        <JerseyDisplay />
      </div>
    </div>
  );
};

export default FootballJerseys;
