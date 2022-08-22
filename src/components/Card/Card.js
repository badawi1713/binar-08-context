import React, { useContext } from "react";
import { LayoutContext } from "../../context/layoutContext";
import CardImage from "./CardImage";
import CardName from "./CardName";
import "./index.css";

const Card = () => {
  const data = useContext(LayoutContext);
  const { nightmode } = data;
  return (
    <div className={`card ${nightmode && "card--dark"}`}>
      <div className={`card__container`}>
        <CardImage />
        <CardName />
        <div className="card__actions">
          <button className="card__button card__button--primary">
            Twitter
          </button>
          <button className="card__button">Github</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
