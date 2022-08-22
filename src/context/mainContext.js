import { createContext } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const cardData = {
    name: "Dzaky Badawi",
    avatar:
      "https://pbs.twimg.com/profile_images/1548892350029516801/zdBqralu_400x400.jpg",
  };

  const mainContextValue = {
    cardData,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
