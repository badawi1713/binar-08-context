import React, { useContext } from "react";
import { LayoutContext } from "../../context/layoutContext";
import "./index.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Toggle = () => {
  const data = useContext(LayoutContext);
  const { nightmode, handleToggle } = data;

  return (
    <label htmlFor="toggle" className="toggle__container">
      <div>
        <input
          onChange={handleToggle}
          type="checkbox"
          id="toggle"
          className="sr-only"
        />
        <div className="toggle__input-container"></div>
        <div className="toggle__input-dot">
          {nightmode ? <FaMoon /> : <FaSun />}
        </div>
      </div>
      <p className="toggle__text">{nightmode ? "Night" : "Day"} Mode</p>
    </label>
  );
};

export default Toggle;
