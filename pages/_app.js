import { Provider, useDispatch } from "react-redux";
import "../styles/globals.css";
import reduxStore from "../redux_store/store";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import StickyNavbar from "../components/StickyNavbar/StickyNavbar";
import { useEffect } from "react";
import PopNotifier from "../components/popNotifier/PopNotifier";


export default function App({ Component, pageProps }) {
  function disableCopy() {
    document.addEventListener("copy", (event) => {
      event.preventDefault();
      return false;
    });
  }


  useEffect(() => {
    disableCopy();
  }, [])
  
  return (
    <Provider store={reduxStore}>
      <Navbar />
      <StickyNavbar />
      <PopNotifier />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
