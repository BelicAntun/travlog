import { HeroSection, DestinationsSection, NewsletterSection } from './components';

export const Home = () => {
  return (
    <div className="flex flex-col flex-1 sm:px-12 md:px-[90px] pb-[69px]">
      <HeroSection />
      <DestinationsSection />
      <NewsletterSection />
    </div>
  );
};
