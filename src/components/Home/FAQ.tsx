import { HeadingPropes } from "../../util/PropTypes"
import Heading from "../Heading"
import FAQCarousel from "../FAQCarousel";
import { realEstateFAQs } from '../../util/data';

const FAQs = () => {
      const data:HeadingPropes = {
            heading: "Frequently Asked Questions",
            text: "Find answers to common questions about EstateZ's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
            buttonText: "View All FAQ's"
      }
      
      return (
            <section className="faq_section">
                  <div className="container">
                        <Heading heading={data.heading} text={data.text} buttonText={data.buttonText} />
                        <FAQCarousel faq={realEstateFAQs} />
                  </div>
            </section>
      )
}

export default FAQs;