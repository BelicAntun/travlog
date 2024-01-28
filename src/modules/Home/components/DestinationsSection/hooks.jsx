import { useEffect, useState } from 'react';
import { destinations, DestinationCategory } from './consts';

export const useDestinationsSection = () => {
  const [travelDestinations, setTravelDestinations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiCall = (selectedCategory) => {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        try {
          let filteredDestinations = destinations;
          if (selectedCategory !== 'All') {
            filteredDestinations = destinations.filter((destination) => destination.category === selectedCategory);
          }
          resolve(filteredDestinations);
        } catch (error) {
          reject(error);
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    });
  };

  const categoriesSelect = Object.values(DestinationCategory).map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  const categoriesNav = Object.values(DestinationCategory).map((category) => {
    return (
      <li key={category} className={`${category === selectedCategory ? 'text-primary-dark' : 'text-primary-gray-black-50'}`}>
        <button onClick={() => handleCategoryClick(category)}>{category}</button>
      </li>
    );
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await apiCall(selectedCategory);
        setTravelDestinations(data);
      } catch (error) {
        setError(error.message || 'An error occurred during data fetching, please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return { categoriesSelect, categoriesNav, travelDestinations, isLoading, handleCategoryClick, selectedCategory, error };
};
