import { useDestinationsSection } from './hooks';
import { TravelCard } from './components';
import { Loader } from 'src/components';

export const DestinationsSection = () => {
  const { categoriesSelect, categoriesNav, travelDestinations, isLoading, handleCategoryClick, selectedCategory, error } =
    useDestinationsSection();

  return (
    <section className="flex flex-col gap-[44px] w-full py-10 ">
      <div className="flex justify-between flex-col sm:flex-row space-y-6 items-center w-full px-7 sm:px-0">
        <div className="flex flex-col gap-[15px]">
          <span className="text-secondary uppercase text-lg tracking-[0.32px] font-semibold">Top Destination</span>
          <span className="font-semibold text-secondary-dark text-[40px] leading-[1.2]">Explore top destination</span>
        </div>
        <ul className="lg:flex space-x-[38.4px] text-base leading-[1.2] font-medium whitespace-nowrap hidden">
          {categoriesNav}
          <li className="text-secondary ">
            <button
              onClick={() => handleCategoryClick('All')}
              className={selectedCategory === 'All' ? 'underline underline-offset-2' : ''}
            >
              See All
            </button>
          </li>
        </ul>
        <div className="flex space-x-4 lg:hidden">
          <span>Category:</span>
          <select
            className="text-base leading-[1.2] font-medium text-secondary-dark border border-secondary-dark"
            value={selectedCategory}
            onChange={(e) => handleCategoryClick(e.target.value)}
          >
            {categoriesSelect}
            <option value="All">See all</option>
          </select>
        </div>
      </div>

      {!isLoading && !error ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mx-auto">
          {travelDestinations.map((destination) => {
            return <TravelCard {...destination} key={destination.id} />;
          })}
        </div>
      ) : (
        <>{error ? <p className="text-red-500">{error}</p> : <Loader />}</>
      )}
    </section>
  );
};
