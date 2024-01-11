import { HeadingPropes } from "../../util/PropTypes";
import HeadTitle from "../HeadTitle";

const Achievements = () => {
      const headingData:HeadingPropes = {
            heading: "Our Achievements",
            text: "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
            buttonText: ""
      }
      return (
            <section className="achievements">
                  <div className="container">
                        <HeadTitle heading={headingData.heading} text={headingData.text} buttonText="" />

                        <div className="achievements_container">
                              <div className="items">
                                    <h3>3+ Years of Excellence</h3>
                                    <p className="text">
                                    With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.
                                    </p>
                              </div>
                              <div className="items">
                                    <h3>Happy Clients</h3>
                                    <p className="text">
                                    Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.
                                    </p>
                              </div>
                              <div className="items">
                                    <h3>Industry Recognition</h3>
                                    <p className="text">
                                    We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default Achievements;