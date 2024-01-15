import HeadTitle from "../HeadTitle";
import { HeadingPropes } from "../../util/PropTypes";
import FormSection from "../FormSection";

const ReachOut = () => {
      const headData:HeadingPropes = {
            heading: "Let's Make it Happen",
            text: "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.",
            buttonText: ""
      }
      return (
            <section className="reach_out">
                  <div className="container">
                        <HeadTitle heading={headData.heading} text={headData.text} buttonText="" />
                        <FormSection />
                        <div className="submission">
                              <p>
                                    <input type="checkbox" />
                                    <span>I agree with Terms of Use and Privacy Policy</span>
                              </p>
                              <a href="#" className="primary_btn">Send your Message</a>
                        </div>
                  </div>
            </section>
      )
};

export default ReachOut;