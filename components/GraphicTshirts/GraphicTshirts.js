import styles from "../../styles/componentsCss/GraphicTshirts/GraphicTshirts.module.css";
import TshirtDisplay from "./TshirtDisplay";

const GraphicTshirts = () => {
  return (
    <div className={styles.grpahicTshirts}>
      <div className={styles.graphicHeading}>
        <h1 className={styles.heading}>Graphic T-Shirts</h1>
        <div className={styles.border} />
      </div>
      <p className={styles.paragraph}>Eye Catching Premium Quality Graphic Football Tees</p>
      <div className={styles.listTshirts}>
            <TshirtDisplay />
            <TshirtDisplay />
            <TshirtDisplay />
            <TshirtDisplay />
            <TshirtDisplay />
            <TshirtDisplay />
            <TshirtDisplay />
            <TshirtDisplay />
      </div>
    </div>
  );
};

export default GraphicTshirts;
