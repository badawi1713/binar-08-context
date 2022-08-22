import React, { useContext } from "react";
import { LayoutContext } from "../../context/layoutContext";
import { MainContextClass } from "../../context/mainContextClass";

const CardName = () => {
  const data = useContext(MainContextClass);
  const layoutData = useContext(LayoutContext);

  const { cardData } = data;
  const { name, job } = cardData;
  const { nightmode } = layoutData;

  return (
    <>
      <h5 className={`card__name ${nightmode && "card__name--dark"}`}>
        {name}
      </h5>
      <span>{job}</span>
    </>
  );
};

export default CardName;
