import "tailwindcss/tailwind.css";
import PropTypes from "prop-types";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.node.isRequired,
//   pageProps: PropTypes.node,
// };

export default MyApp;
