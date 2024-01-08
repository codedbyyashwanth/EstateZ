import { HeadingPropes } from "../../util/PropTypes"
import Heading from "../Heading"
import TestimonialsCarousel from "../TestimonialsCarousel";
import { testimonials } from '../../util/data';

const Testimonials = () => {
      const data:HeadingPropes = {
            heading: "What Our Clients Say",
            text: "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.",
            buttonText: "View All Testimonials"
      }
      
      return (
            <section className="testimonials_section">
                  <div className="container">
                        <Heading heading={data.heading} text={data.text} buttonText={data.buttonText} />
                        <TestimonialsCarousel testimonials={testimonials} />
                  </div>
            </section>
      )
}

export default Testimonials;