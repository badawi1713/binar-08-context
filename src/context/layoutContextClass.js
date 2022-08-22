import React, { Component, createContext } from "react";
export const LayoutContext = createContext();

class LayoutContextClassProvider extends Component {
  state = {
    nightmode: false,
  };

  handleToggle = () => {
    this.setState({
      nightmode: !this.state.nightmode,
    });
  };

  render() {
    return (
      <LayoutContext.Provider
        value={{ ...this.state, handleToggle: this.handleToggle }}
      >
        {this.props.children}
      </LayoutContext.Provider>
    );
  }
}

export default LayoutContextClassProvider;
