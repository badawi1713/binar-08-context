import React from "react";
import { Card, Toggle } from "./components";
import LayoutContextProvider from "./context/layoutContext";
import MainContextClassProvider from "./context/mainContextClass";
const App = () => {
  return (
    <LayoutContextProvider>
      <MainContextClassProvider>
        <div className="min-h-screen flex flex-col justify-center gap-10">
          <div className="mx-auto">
            <Toggle />
          </div>
          <section className="flex items-center justify-center">
            <Card />
          </section>
        </div>
      </MainContextClassProvider>
    </LayoutContextProvider>
  );
};

export default App;
