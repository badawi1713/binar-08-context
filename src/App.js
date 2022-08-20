import React from "react";
import { Card, Toggle } from "./components";
import LayoutContextProvider from "./context/layoutContext";
import { MainContext } from "./context/mainContext";
const App = () => {
  const cardData = {
    name: "Dzaky Badawi",
    avatar: "https://pbs.twimg.com/profile_images/1548892350029516801/zdBqralu_400x400.jpg",
    job: "Frontend Developer",
  };

  const mainContextValue = {
    cardData,
  };

  return (
    <LayoutContextProvider>
      <div className="min-h-screen flex flex-col justify-center gap-10">
        <div className="mx-auto">
          <Toggle />
        </div>
        <section className="flex items-center justify-center">
          <MainContext.Provider value={mainContextValue}>
            <Card />
          </MainContext.Provider>
        </section>
      </div>
    </LayoutContextProvider>
  );
};

export default App;
