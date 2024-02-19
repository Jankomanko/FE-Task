import React, { useState } from "react";
import './Card.css';

const Card = ({ city, country, shortDescription, rating, price, imageUrl, category }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
 

  const handleSeeMore = () => {
    setShowFullDescription(!showFullDescription);
  };  
  
  return (
      <article className="card">
        <div className="card-image-container">
          <img src={imageUrl} alt={city} />
          <div className="rating"> <i className="fa-solid fa-star"></i> {rating}</div>
        </div>
          <h2>{city}</h2>
          <p className='card-description'>
           {showFullDescription ? shortDescription : `${shortDescription.slice(0, 150)}...`}
           <button className="btn-see-more" onClick={handleSeeMore}>
            {showFullDescription ? 'See Less' : 'See More'}
           </button>
          </p>
        <br />
        <div className="card-details">
          <div className="location-details">
            <p>{city}, {country}</p>
            <p className="price">{price.currency}{price.amount}</p>
          </div>
          <div className="price-details">
            <button className="btn-card">See More</button>
          </div>
        </div>
      </article>
    );
  };

export default Card;
