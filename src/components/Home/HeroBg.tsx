import HeroImg from "../../assets/hero-img.png";

const HeroBg = () => {
      const text = " Discover Your Dream Property -";

      return (
            <div className="hero_background">
                  <div className="container">
                        <div className="left_container">
                              <div className="text_container">
                                    <h1 className="h1">Discover Your Dream Property with EstateZ</h1>
                                    <p className="text">
                                          Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                                    </p>
                                    <div className="btn_container">
                                          <a href="#" className="dark_btn">Learn More</a>
                                          <a href="#" className="primary_btn">Browse Properties</a>
                                    </div>
                                    <div className="counter_section">
                                          <div className="items">
                                                <h2 className="count">200+</h2>
                                                <span className="text">Happy Customers</span>
                                          </div>
                                          <div className="items">
                                                <h2 className="count">10k+</h2>
                                                <span className="text">Properties For Clients</span>
                                          </div>
                                          <div className="items">
                                                <h2 className="count">16+</h2>
                                                <span className="text">Years of Experience</span>
                                          </div>
                                    </div>
                              </div>

                              <div className="rotate_content">
                                    <p id="rotate_text">
                                          {
                                                text.split("").map((letter, index) => (
                                                      <span style={{ transform: `rotate(${index * 11.6}deg)`}} key={index}>{letter}</span>
                                                ))
                                          }
                                    </p>
                              </div>
                        </div>
                        <div className="right_container">
                              <img src={HeroImg} alt="Hero Image" />
                        </div>
                  </div>
            </div>
      );
}

export default HeroBg;