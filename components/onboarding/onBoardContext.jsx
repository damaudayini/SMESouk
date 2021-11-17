import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { useWindowSize } from "../../Libs";
import OnboardSlider from "../login/OnBoardSlider";

export const OnBoardContext = createContext();

const OnBoardContextProvider = ({ children }) => {
  const { width } = useWindowSize();
  const [signupData, setSignupData] = useState({});

  return (
    <OnBoardContext.Provider value={[signupData, setSignupData]}>
      <div className="w-full h-full min-h-screen md:flex md:flex-wrap md:overflow-hidden">
        {width > 992 && <OnboardSlider />}
        <div className="flex-col w-full h-full min-h-screen flex lg:w-2/4 lg:overflow-auto xl:h-auto">
          {children}
        </div>
      </div>
    </OnBoardContext.Provider>
  );
};

OnBoardContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OnBoardContextProvider;
