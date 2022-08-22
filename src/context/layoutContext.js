import React, { createContext, useState } from "react";
export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
  const [state, setState] = useState({
    nightmode: false,
  });

  const handleToggle = () => {
    setState((prevState) => ({
      ...prevState,
      nightmode: !prevState.nightmode,
    }));
  };

  return (
    <LayoutContext.Provider value={{ ...state, handleToggle: handleToggle }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
