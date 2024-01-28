export const HeroSection = () => {
  return (
    <section className="flex xl:flex-row flex-col px-7 pt-14 pb-10 w-full gap-16 xl:gap-36">
      <div className="flex flex-col gap-6 h-[200px] w-[244px] shrink-0">
        <span className="text-secondary uppercase text-lg leading-[0] tracking-[0.32px] font-semibold">What we serve</span>
        <span className="text-primary-dark font-bold text-[40px] leading-[1.3]">Top Values For You</span>
        <span className="text-base font-normal leading[1.37] text-primary-black-75">Embrace life's vastness, venture forth,</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between flex-1 gap-10 md:gap-0">
        <div className="flex flex-row md:flex-col gap-6 w-full md:max-w-[204px] shrink-0 mx-auto items-center md:items-baseline">
          <img src="src/assets/suitcase.png" className="w-[101.643px] h-[76.232px] shrink-0" alt="suitcase" />
          <div className="flex flex-col gap-6 justify-between">
            <h3 className="text-primary-text-color font-bold text-[24px] leading-[1.31] tracking-[0.099px]">Lot of choices</h3>
            <span className="text-base font-normal leading[1.37] text-primary-black-75">
              Embrace life's vastness, venture forth,
            </span>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-6 w-full md:max-w-[233px] shrink-0 mx-auto items-center md:items-baseline">
          <img src="src/assets/yellow_plane.png" className="w-[101.643px] h-[76.232px] shrink-0" alt="yellow plane" />
          <div className="flex flex-col gap-6 justify-between">
            <h3 className="text-primary-text-color font-bold text-[24px] leading-[1.31] tracking-[0.099px]">Best Tour Guide</h3>
            <span className="text-base font-normal leading[1.37] text-primary-black-75">
              Embrace life's vastness, venture forth,
            </span>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-6 w-full md:max-w-[233px] shrink-0 mx-auto items-center md:items-baseline">
          <img src="src/assets/card.png" className="w-[101.643px] h-[76.232px] shrink-0" alt="credit card" />
          <div className="flex flex-col gap-6 justify-between">
            <h3 className="text-primary-text-color font-bold text-[24px] leading-[1.31] tracking-[0.099px]">Easy Booking</h3>
            <span className="text-base font-normal leading[1.37] text-primary-black-75">
              Embrace life's vastness, venture forth,
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
