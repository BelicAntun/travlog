export const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <div className="text-content">
          <h2 className="section-title">Sign up to our newsletter</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.
          </p>
        </div>
        <div className="input-container">
          <input className="email-input" placeholder="Enter Your email address" />
          <button className="submit-button" />
        </div>
      </div>
      <div className="track left-track">
        <div className="track-svg-container">
          <div className="aeroplane-svg "></div>
        </div>
      </div>
      <div className="track right-track">
        <div className="track-svg-container">
          <div className="destianation-svg"></div>
        </div>
      </div>
    </section>
  );
};
