import React, { useState } from 'react';

export const TravelCard = ({ city, country, shortDescription, rating, price, imageUrl }) => {
  const [isShortDescription, setIsShortDescription] = useState(true);
  const description = shortDescription.split(' ').slice(0, 11).join(' ').concat('...');

  const toggleDescription = () => {
    setIsShortDescription(!isShortDescription);
  };

  return (
    <div className="flex flex-col w-full max-w-[388px]">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`relative h-[276px] w-full max-w-[388px] bg-no-repeat object-cover object-center rounded-[44px]`}
      >
        <div className="flex items-center absolute top-4 gap-2 right-8 bg-[#0C111F3D] backdrop-blur-[3.8px] p-2 pr-4 rounded-[44px]">
          <div className="p-2 flex items-center justify-center h-8 w-8">
            <img src="/src/assets/star.svg" alt="star" />
          </div>
          <div className="flex items-center justify-center h-8 w-8">
            <span className="text-white text-lg leading-[1.8] mt-0.5">{rating}</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full after:content-[url(src/assets/baloons.svg)] after:absolute after:z-[-1]"></div>
      </div>
      <div className="flex flex-col gap-[10px] pl-5 pt-5 pb-6 pr-8">
        <span className="font-bold text-2xl">{city}</span>
        <p>
          {isShortDescription ? (
            <>
              {description}
              <span className="cursor-pointer ml-1 text-blue-500" onClick={toggleDescription}>
                see more
              </span>
            </>
          ) : (
            <>
              {shortDescription}
              <span className="cursor-pointer ml-1 text-blue-500" onClick={toggleDescription}>
                see less
              </span>
            </>
          )}
        </p>
      </div>
      <div className="flex justify-between bg-secondary-smoke pl-5 pt-5 pb-6 pr-8 rounded-b-[44px]">
        <div className="flex flex-col space-y-1">
          <span className="text-base font-normal tracking-[-0.156px] leading-[1.55] text-secondary-dark-60">
            {`${city}, ${country}`}
          </span>
          <div className="flex item-center gap-[4.5px]">
            <span className="text-secondary-dark font-bold text-2xl leading-[1.16]">{`${price.currency}${price.amount}`}</span>
            <span className="text-secondary-dark-28 font-medium text-sm leading-[2]">x 12 interes free</span>
          </div>
        </div>
        <button className="text-white text-sm leading-[1.8] rounded-[44px] px-5 py-2 bg-gradient-to-br from-[#8482FF] to-[#7723FE]">
          See More
        </button>
      </div>
    </div>
  );
};
