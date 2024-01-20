import HeadTitle from "../HeadTitle";
import { HeadingPropes } from "../../util/PropTypes";

const PropertyValue = () => {
      const headData1:HeadingPropes = {
            heading: "Unlock Property Value",
            text: "Selling your property should be a rewarding experience, and at EstateZ, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey",
            buttonText: ""
      }

      const headData2:HeadingPropes = {
            heading: "Effortless Property Management",
            text: "Owning a property should be a pleasure, not a hassle. EstateZ's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
            buttonText: ""
      }

      return (
            <>
                  <section className="property_value">
                        <div className="container">
                              <HeadTitle heading={headData1.heading} text={headData1.text} buttonText="" />

                              <div className="property_value_container">
                                    <div className="items">
                                          <div className="head_content">
                                                <img src="/icon-5.png" alt="" />
                                                <h3>Valuation Mastery</h3>
                                          </div>
                                          <p className="text">Discover the true worth of your property with our expert valuation services.</p>
                                    </div>
                                    <div className="items">
                                          <div className="head_content">
                                                <img src="/icon-6.png" alt="" />
                                                <h3>Strategic Marketing</h3>
                                          </div>
                                          <p className="text">Selling a property requires more than just a listing; it demands a strategic marketing approach.</p>
                                    </div>
                                    <div className="items">
                                          <div className="head_content">
                                                <img src="/icon-7.png" alt="" />
                                                <h3>Negotiation Wizardry</h3>
                                          </div>
                                          <p className="text">Negotiating the best deal is an art, and our negotiation experts are masters of it.</p>
                                    </div>
                                    <div className="items">
                                          <div className="head_content">
                                                <img src="/icon-8.png" alt="" />
                                                <h3>Closing Success</h3>
                                          </div>
                                          <p className="text">A successful sale is not complete until the closing. We guide you through the intricate closing process.</p>
                                    </div>
                                    <div className="items">
                                          <div className="head_content">
                                                <h2>Unlock the Value of Your Property Today</h2>
                                                <a href="#" className="dark_btn">Learn More</a>
                                          </div>
                                          <p className="text">
                                          Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="property_value">
                        <div className="container">
                              <HeadTitle heading={headData2.heading} text={headData2.text} buttonText="" />

                              <div className="property_value_container">
                                    <div className="items">
                                          <div className="head_content">
                                                <img src="/icon-9.png" alt="" />
                                                <h3>Tenant Harmony</h3>
                                          </div>
                                          <p className="text">Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.</p>
                                    </div>
                                    <div className="items">
                                          <div className="head_content">
                                                <img src="/icon-10.png" alt="" />
                                                <h3>Maintenance Ease</h3>
                                          </div>
                                          <p className="text">Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.</p>
                                    </div>
                                    <div className="items">
                                          <div className="head_content">
                                                <img src="/icon-11.png" alt="" />
                                                <h3>Financial Peace of Mind</h3>
                                          </div>
                                          <p className="text">Managing property finances can be complex. Our financial experts take care of rent collection</p>
                                    </div>
                                    <div className="items">
                                          <div className="head_content">
                                                <img src="/icon-12.png" alt="" />
                                                <h3>Legal Guardian</h3>
                                          </div>
                                          <p className="text">Stay compliant with property laws and regulations effortlessly.</p>
                                    </div>
                                    <div className="items">
                                          <div className="head_content">
                                                <h2>Experience Effortless Property Management</h2>
                                                <a href="#" className="dark_btn">Learn More</a>
                                          </div>
                                          <p className="text">
                                          Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>
            
            </>
      )
}

export default PropertyValue;