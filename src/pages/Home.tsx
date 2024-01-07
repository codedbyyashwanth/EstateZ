import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HeroBg from "../components/Home/HeroBg";


const Home = () => {
      return (
      <>
            <header>
                  <Banner />
                  <Navbar isActive="home" />
                  <HeroBg />
            </header>
            <main className="home_main"></main>
            <footer></footer>
      </>
      );
}

export default Home;