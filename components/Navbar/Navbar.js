import { useEffect, useState } from "react";
import styles from "../../styles/componentsCss/navbar/Navbar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { TbLogout } from "react-icons/tb";
import Image from "next/image";
import NavMenu from "./NavMenu";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_NAVIGATION,
  CLOSE_SEARCH,
  OPEN_NAVIGATION,
  OPEN_SEARCH,
  SET_SCREEN_WIDTH,
} from "../../redux_store/reducers/NavOperations";
import Link from "next/link";
import Logout from "../../../utils/Logout";
import Cookies from "js-cookie";
import { SET_INITIAL_DATA } from "../../utils/SetInitialData";

const Navbar = () => {
  const { loggedIn } = useSelector((state) => state.userStatus);
  const { openNavigation, openSearch } = useSelector((state) => state.navbar);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    SET_INITIAL_DATA(Cookies, dispatch);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      dispatch(SET_SCREEN_WIDTH(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      setIsClient(true);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = () => {
    if (openNavigation) {
      dispatch(CLOSE_NAVIGATION());
    } else {
      dispatch(OPEN_NAVIGATION());
    }
  };
  const handleSearch = () => {
    if (openSearch) {
      dispatch(CLOSE_SEARCH());
    } else {
      dispatch(OPEN_SEARCH());
    }
  };
  return (
    <div>
      <div className={`${styles.navbar}`}>
        <Link href={"/"}>
          <Image
            className={styles.logoImage}
            src="/logo.png"
            alt="Logo image"
            priority={true}
            quality={100}
            width={500}
            height={500}
          />
        </Link>
        <div className={`${styles.searchContainer} flex`}>
          <input
            className={`${styles.searchInput} rounded-sm`}
            placeholder="Search.."
            type="text"
          />
          <div className={`${styles.searchButton}`}>
            <button>
              <BiSearchAlt2 color="black" size={25} />
            </button>
          </div>
        </div>
        <div className={`${styles.userContainer} `}>
          <Link href="/cart">
            <button className={styles.profileIcon}>
              <RiShoppingBag2Fill
                className={`cursor-pointer ${styles.icon}`}
                color="black"
                size={30}
              />
            </button>
          </Link>
          {loggedIn ? (
            <Link href="/">
              <button onClick={() => Logout(Cookies, dispatch)}>
                <TbLogout
                  className={`cursor-pointer ${styles.icon}`}
                  color="black"
                  size={30}
                />
              </button>
            </Link>
          ) : (
            <Link href="/account">
              <button>
                <FaUser
                  className={`cursor-pointer ${styles.icon}`}
                  color="black"
                  size={30}
                />
              </button>
            </Link>
          )}
        </div>
      </div>
      <div>
        <div className={`${styles.smallNavbar}`}>
          <Search openSearch={openSearch} />
          <button onClick={() => handleNavigation()}>
            {openNavigation ? (
              <RxCross2 color="black" size={25} />
            ) : (
              <FiMenu color="black" size={25} />
            )}
            <NavMenu openNavigation={openNavigation} />
          </button>
          <button onClick={() => handleSearch()}>
            <BiSearchAlt2 color="black" size={30} />
          </button>
          <Link href="/">
            <Image
              className={styles.logoImageCenter}
              src="/logo.png"
              alt="Logo image"
              priority={true}
              quality={100}
              width={500}
              height={500}
            />
          </Link>
          <button className={styles.profileIcon}>
            <Link href="/cart">
              <RiShoppingBag2Fill color="black" size={25} />
            </Link>
          </button>
          <Link href="/account">
            <button>
              <FaUser color="black" size={25} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
