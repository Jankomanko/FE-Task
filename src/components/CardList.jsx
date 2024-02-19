import React from "react";
import Card from './Card';

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </div>
  );
};

export default CardList;

