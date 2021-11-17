import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { useWindowSize } from "../../Libs";
import OnboardSlider from "./OnBoardSlider";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const { width } = useWindowSize();
  const [signupData, setSignupData] = useState({
    step1: {
      email: "",
      "mobile-number": "",
    },
    step2: null,
  });

  return (
    <LoginContext.Provider value={[signupData, setSignupData]}>
      <div className="w-full h-full min-h-screen lg:flex lg:flex-wrap lg:overflow-hidden">
        {width > 992 && <OnboardSlider />}
        <div>
          <div className="w-full max-w-lg m-auto">
            <div className="relative">{children}</div>
          </div>
        </div>
      </div>
    </LoginContext.Provider>
  );
};

LoginContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginContextProvider;
