import HeadTitle from "../HeadTitle";
import { HeadingPropes } from "../../util/PropTypes";

const Features = () => {
      const headingData:HeadingPropes = {
            heading: "Navigating the EstateZ Experience",
            text: "At EstateZ, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.",
            buttonText: ""
      }

      return (
            <section className="features">
                  <div className="container">
                        <HeadTitle heading={headingData.heading} text={headingData.text} buttonText="" />
                        <div className="features_container">
                              <div className="items">
                                    <div className="item_head">
                                          <span>Step 01</span>
                                    </div>
                                    <div className="text_content">
                                          <h3>Discover a World of Possibilities</h3>
                                          <p className="text">
                                          Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.
                                          </p>
                                    </div>
                              </div>
                              <div className="items">
                                    <div className="item_head">
                                          <span>Step 02</span>
                                    </div>
                                    <div className="text_content">
                                          <h3>Narrowing Down Your Choices</h3>
                                          <p className="text">
                                          Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.
                                          </p>
                                    </div>
                              </div>
                              <div className="items">
                                    <div className="item_head">
                                          <span>Step 03</span>
                                    </div>
                                    <div className="text_content">
                                          <h3>Personalized Guidance</h3>
                                          <p className="text">
                                          Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.
                                          </p>
                                    </div>
                              </div>
                              <div className="items">
                                    <div className="item_head">
                                          <span>Step 04</span>
                                    </div>
                                    <div className="text_content">
                                          <h3>See It for Yourself</h3>
                                          <p className="text">
                                          Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.
                                          </p>
                                    </div>
                              </div>
                              <div className="items">
                                    <div className="item_head">
                                          <span>Step 05</span>
                                    </div>
                                    <div className="text_content">
                                          <h3>Making Informed Decisions</h3>
                                          <p className="text">
                                          Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.
                                          </p>
                                    </div>
                              </div>
                              <div className="items">
                                    <div className="item_head">
                                          <span>Step 06</span>
                                    </div>
                                    <div className="text_content">
                                          <h3>Getting the Best Deal</h3>
                                          <p className="text">
                                          We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Features;