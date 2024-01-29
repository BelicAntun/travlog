export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-description">
        <span className="category">What we serve</span>
        <span className="title">Top Values For You</span>
        <span className="subtitle">Embrace life's vastness, venture forth,</span>
      </div>
      <div className="features">
        <div className="feature first-feature">
          <img src="src/assets/suitcase.png" className="feature-image" alt="suitcase" />
          <div className="feature-description">
            <h3 className="feature-title">Lot of choices</h3>
            <span className="feature-subtitle">Embrace life's vastness, venture forth,</span>
          </div>
        </div>
        <div className="feature">
          <img src="src/assets/yellow_plane.png" className="feature-image" alt="yellow plane" />
          <div className="feature-description">
            <h3 className="feature-title">Best Tour Guide</h3>
            <span className="feature-subtitle">Embrace life's vastness, venture forth,</span>
          </div>
        </div>
        <div className="feature">
          <img src="src/assets/card.png" className="feature-image" alt="credit card" />
          <div className="feature-description">
            <h3 className="feature-title">Easy Booking</h3>
            <span className="feature-subtitle">Embrace life's vastness, venture forth,</span>
          </div>
        </div>
      </div>
    </section>
  );
};
