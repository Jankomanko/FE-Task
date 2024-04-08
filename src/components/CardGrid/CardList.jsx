import React from "react";
import Card from './Components/Card.jsx';

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

