import React, { useState } from 'react';

export const TravelCard = ({ city, country, shortDescription, rating, price, imageUrl }) => {
  const [isShortDescription, setIsShortDescription] = useState(true);
  const description = shortDescription.split(' ').slice(0, 11).join(' ').concat('...');

  const toggleDescription = () => {
    setIsShortDescription(!isShortDescription);
  };

  return (
    <div className="travel-card">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image-container">
        <div className="rating-overlay">
          <div className="star-icon">
            <img src="/src/assets/star.svg" alt="star" />
          </div>
          <div className="rating-value">
            <span>{rating}</span>
          </div>
        </div>
        <div className="balloons-overlay"></div>
      </div>
      <div className="content-container">
        <span className="city-name">{city}</span>
        <p>
          {isShortDescription ? (
            <>
              {description}
              <span className="read-more" onClick={toggleDescription}>
                see more
              </span>
            </>
          ) : (
            <>
              {shortDescription}
              <span className="read-more" onClick={toggleDescription}>
                see less
              </span>
            </>
          )}
        </p>
      </div>
      <div className="footer-container">
        <div className="details-container">
          <span className="location-details">{`${city}, ${country}`}</span>
          <div className="price-details">
            <span className="price">{`${price.currency}${price.amount}`}</span>
            <span className="interest-free">x 12 interes free</span>
          </div>
        </div>
        <button className="see-more-button">See More</button>
      </div>
    </div>
  );
};
