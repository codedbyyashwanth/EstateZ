import HeadTitle from "../HeadTitle"
import PropertyCarousel from "../PropertyCarousel"
import { HeadingPropes } from "../../util/PropTypes"
import { realEstateProperties } from "../../util/data"

const FeaturedProperties = () => {
      const data:HeadingPropes = {
            heading: "Discover a World of Possibilities",
            text: "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home",
            buttonText: ""
      }

      return (
            <section className="featured_properties">
                  <div className="container">
                        <HeadTitle heading={data.heading} text={data.text} buttonText="" />
                        <PropertyCarousel realEstateProperties={realEstateProperties} />
                  </div>
            </section>
      )
}

export default FeaturedProperties;