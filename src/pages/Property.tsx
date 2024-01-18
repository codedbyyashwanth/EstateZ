import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Properties/Property/HeroSection";


const Property = () => {
      return (
            <>
                  <header>
                        <Banner />
                        <Navbar isActive="properties" />
                  </header>
                  <main className="property_main">
                        <HeroSection />
                  </main>
                  <footer></footer>
            </>
      )
}

export default Property;