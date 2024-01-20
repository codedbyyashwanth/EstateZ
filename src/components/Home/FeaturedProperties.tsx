import { HeadingPropes } from "../../util/PropTypes"
import Heading from "../Heading"
import PropertyCarousel from "../PropertyCarousel"
import { realEstateProperties } from '../../util/data';

const FeaturedProperties = () => {
      const data:HeadingPropes = {
            heading: "Featured Properties",
            text: "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through EstateZ. Click 'View Details' for more information.",
            buttonText: "View All Properties"
      }
      
      return (
            <section className="featured_properties_section">
                  <div className="container">
                        <Heading heading={data.heading} text={data.text} buttonText={data.buttonText} />
                        <PropertyCarousel realEstateProperties={realEstateProperties} />
                  </div>
            </section>
      )
}

export default FeaturedProperties;