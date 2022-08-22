import React, { Component, createContext } from "react";
export const MainContextClass = createContext();

class MainContextClassProvider extends Component {
  state = {
    cardData: {
      name: "Dzaky Badawi",
      avatar:
        "https://pbs.twimg.com/profile_images/1548892350029516801/zdBqralu_400x400.jpg",
    },
  };

  render() {
    const mainContextValue = {
      cardData: this.state.cardData,
    };
    return (
      <MainContextClass.Provider value={mainContextValue}>
        {this.props.children}
      </MainContextClass.Provider>
    );
  }
}

export default MainContextClassProvider;
