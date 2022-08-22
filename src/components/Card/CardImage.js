import React, { useContext } from "react";
import { MainContextClass } from "../../context/mainContextClass";

const CardImage = () => {
  const data = useContext(MainContextClass);
  const { cardData } = data;
  const { avatar } = cardData;

  return <img className="card__avatar" src={avatar} alt="avatar" />;
};

export default CardImage;
