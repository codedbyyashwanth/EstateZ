import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const Home:FC = () => {
      return (
      <>
            <header>
                  <Banner />
                  <Navbar isActive="home" />
            </header>
            <main className="home-main"></main>
            <footer></footer>
      </>
      );
}

export default Home;