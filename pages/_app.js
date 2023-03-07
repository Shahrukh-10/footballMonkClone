import { Provider } from "react-redux";
import "../styles/globals.css";
import reduxStore from "../redux_store/store";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import StickyNavbar from "../components/StickyNavbar/StickyNavbar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={reduxStore}>
      <Navbar />
      <StickyNavbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
