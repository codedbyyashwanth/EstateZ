import Banner from "../components/Banner";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";
import FAQs from "../components/Home/FAQ";
import FeaturedProperties from "../components/Home/FeaturedProperties";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Properties/Property/HeroSection";


const Property = () => {
      return (
            <>
                  <header>
                        <Banner />
                        <Navbar isActive="properties" />
                  </header>
                  <main className="">
                        <section className="property_main">
                              <HeroSection />
                        </section>
                        <FeaturedProperties />
                        <FAQs />
                        <CalltoAction />
                  </main>
                  <Footer />
            </>
      )
}

export default Property;