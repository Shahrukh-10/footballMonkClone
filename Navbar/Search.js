import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_SEARCH } from "../../redux_store/reducers/NavOperations";
import styles from "../../styles/componentsCss/navbar/Navbar.module.css";
import { motion } from "framer-motion";

const Search = () => {
  const { openSearch } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  console.log(openSearch);
  const searchBoxVariants = {
    hidden: {
      opacity: 0,
      display: "none",
      transition: { duration: 1 },
    },
    visible: {
      opacity: 1,
      display: "block",
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      variants={searchBoxVariants}
      animate={openSearch ? "visible" : "hidden"}
      initial="hidden"
    >
      <div className={`${styles.search}`}>
        <input
          type="text"
          className={styles.searchInputSmall}
          placeholder="Search"
        />
        <button
          onClick={() => {
            dispatch(CLOSE_SEARCH());
          }}
        >
          <RxCross2 color="black" size={60} />
        </button>
      </div>
    </motion.div>
  );
};

export default Search;
