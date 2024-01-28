export const NewsletterSection = () => {
  return (
    <section className="w-full h-fit rounded-[29px] bg-secondary-yellow py-[74px] relative">
      <div className="flex flex-col gap-10 items-center mx-auto max-w-[520px] relative z-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-[40px] font-semibold leading-[1] tracking-[0.059px] text-secondary-title">
            Sign up to our newsletter
          </h2>
          <p className="text-primary-black-75 text-base font-normal leading-[1.6] text-center px-10">
            Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.
          </p>
        </div>
        <div className="h-[60px] flex bg-white max-w-[360px] sm:max-w-[440px] w-full shrink-0 rounded-[11.8px] py-[10px] pl-3 pr-1 items-center">
          <input
            className="flex-1 outline-none ml-3 placeholder:text-sm text-sm placeholder:leading-[1] leading-[1] text-secondary-subtitle placeholder:text-secondary-subtitle"
            placeholder="Enter Your email address"
          />
          <button className="w-[60px] h-[60px] bg-[url(src/assets/papperPlaneIcon.svg)]" />
        </div>
      </div>
      <div className="top-0 left-3 bg-[url(src/assets/leftTrack.svg)] bg-no-repeat object-cover object-center absolute h-[79.66%] w-[323px] z-0 hidden sm:block">
        <div className="relative h-full w-full">
          <div className="absolute bg-[url(src/assets/plane.svg)] w-[35px] h-[31px] bottom-[calc(26.4%)] right-[-49px]"></div>
        </div>
      </div>
      <div className="top-0 right-[31px] bg-[url(src/assets/rightTrack.svg)] bg-no-repeat object-cover object-center absolute h-[88%] w-[223px] z-0 hidden sm:block">
        <div className="relative h-full w-full">
          <div className="absolute bg-[url(src/assets/destination.svg)] w-[23.144px] h-[33.267px] bottom-[calc(13%)] left-[19px]"></div>
        </div>
      </div>
    </section>
  );
};
