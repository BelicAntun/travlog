import { useDestinationsSection } from './hooks';
import { TravelCard } from './components';
import { Loader } from 'src/components';

export const DestinationsSection = () => {
  const { categoriesSelect, categoriesNav, travelDestinations, isLoading, handleCategoryClick, selectedCategory, error } =
    useDestinationsSection();

  return (
    <section className="destinations-section">
      <div className="section-header">
        <div className="header-content">
          <span className="category-label">Top Destination</span>
          <span className="destination-section-title">Explore top destination</span>
        </div>
        <ul className="category-list">
          {categoriesNav}
          <li className="all-categories">
            <button
              onClick={() => handleCategoryClick('All')}
              className={selectedCategory === 'All' ? 'all-categories all-button-selected' : 'all-categories'}
            >
              See All
            </button>
          </li>
        </ul>
        <div className="category-dropdown">
          <span>Category:</span>
          <select value={selectedCategory} onChange={(e) => handleCategoryClick(e.target.value)}>
            {categoriesSelect}
            <option value="All">See all</option>
          </select>
        </div>
      </div>

      {!isLoading && !error ? (
        <div className="destination-grid">
          {travelDestinations.map((destination) => {
            return <TravelCard {...destination} key={destination.id} />;
          })}
        </div>
      ) : (
        <>{error ? <p className="error-message">{error}</p> : <Loader />}</>
      )}
    </section>
  );
};
