import React, { useState } from "react";
import styled from "styled-components";
import {StyledCard} from "./StyledCard.js";
import {Button} from "./Button.js"

const Card = ({ city, country, shortDescription, rating, price, imageUrl, category }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
 

  const handleSeeMore = () => {
    setShowFullDescription(!showFullDescription);
  };  
  
  return (
      <StyledCard>
        <div className="card-image-container">
          <img src={imageUrl} alt={city} />
          <div className="card-rating"> <i className="fa-solid fa-star"></i> {rating}</div>
        </div>
          <h2>{city}</h2>
          <p className='card-description'>
           {showFullDescription ? shortDescription : `${shortDescription.slice(0, 150)}...`}
           <Button secondary="true" className="btn-see-more" onClick={handleSeeMore}>
            {showFullDescription ? 'See Less' : 'See More'}
           </Button>
          </p>
        <br />
        <div className="card-details">
          <div className="location-details">
            <p>{city}, {country}</p>
            <p className="price">{price.currency}{price.amount}</p>
          </div>
          <div className="price-details">
            <Button primary="true" className="btn-card">See More</Button>
          </div>
        </div>
      </StyledCard>
    );
  };

export default Card;
