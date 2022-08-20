import React, { useContext } from "react";
import { MainContext } from "../../context/mainContext";

const CardImage = () => {
  const data = useContext(MainContext);
  const { cardData } = data;
  const { avatar } = cardData;

  return <img className="card__avatar" src={avatar} alt="avatar" />;
};

export default CardImage;
