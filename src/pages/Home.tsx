import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HeroBg from "../components/Home/HeroBg";
import Features from "../components/Home/Features";
import FeaturedProperties from "../components/Home/FeaturedProperties";
import Testimonials from "../components/Home/Testimonials";


const Home = () => {
      return (
      <>
            <header>
                  <Banner />
                  <Navbar isActive="home" />
                  <HeroBg />
            </header>
            <main className="home_main">
                  <Features />
                  <FeaturedProperties />
                  <Testimonials />
            </main>
            <footer></footer>
      </>
      );
}

export default Home;